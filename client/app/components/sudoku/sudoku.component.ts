import { Component, OnInit, TemplateRef, ViewChild }      from '@angular/core';

import { LoadSudokuService }  from '../../services/load-sudoku.service';
import { SaveSudokuService }  from '../../services/save-sudoku.service';
import { CommunicationService } from '../../services/communication.service';

import { Sudoku } from '../../../assets/js/sudoku';
import { Option } from '../../../assets/js/option';
import { Painter } from '../../../assets/js/painter';
import { SudokuGenerator } from '../../../assets/js/sudokuGenerator';
import { SudokuHelper } from '../../../assets/js/sudokuHelper';
import { SudokuSolver } from '../../../assets/js/sudokuSolver';
import { NakedSingleSolver } from '../../../assets/js/nakedSingleSolver';
import { range } from '../../../assets/js/utils';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'; 

declare var p5: any;

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  
  sudoku: Sudoku
  painter: Painter
  sudokuSolver: SudokuSolver
  sudokuHelper: SudokuHelper
  sudokuGenerator: SudokuGenerator
  nakedSingleSolver: NakedSingleSolver
  canvas: any
  jsonSudoku: any
  
  public modalRef: BsModalRef; 

  constructor(private loadSudokuService: LoadSudokuService, 
              private saveSudokuService: SaveSudokuService, 
              private communicationService: CommunicationService,
              private modalService: BsModalService){

     
    this.sudoku = new Sudoku(9, 9);
    this.sudokuSolver = new SudokuSolver();
    this.sudokuHelper = new SudokuHelper();
    this.sudokuGenerator = new SudokuGenerator();
    this.nakedSingleSolver = new NakedSingleSolver();
    this.communicationService.solve$.subscribe( () => this.solve() );
    this.communicationService.solveByNakedSingle$.subscribe( () => this.solveByNakedSingle() );
    this.communicationService.generate$.subscribe( () => {
                                                            this.sudoku.clean();
                                                            this.generate();
                                                          } ); 
    this.communicationService.changeDifficulty$.subscribe( (difficulty) => this.changeDifficulty(difficulty) );
    this.communicationService.saveSudoku$.subscribe( (username) => this.saveSudoku(username))
    this.communicationService.renderGame$.subscribe( (grid) => this.renderGame(grid))
  }

  @ViewChild('storeModal') 
  private storeModal: TemplateRef<any>;

  ngOnInit() {

    window.onunload = () => this.saveSudokuService.storeSudoku(this.sudoku)

    const sketch = (p) => {
      this.painter = new Painter(60, p);
      let clicked = false;
      let options = []
      
      p.preload = () => {
        Promise.resolve(this.changeDifficulty('easy'))
        .then(() => this.showStorageModal());
      }

      p.setup = () => {
        this.canvas = p.createCanvas(700, 545);
        this.canvas.parent('screen');
        p.background(220);
        //sudoku.load(jsonData.grid);
        //this.saveSudokuService.saveSudoku(sudoku);
        //sudokuHelper.generateNeighbors(sudoku); 
        this.painter.paintSudoku(this.sudoku);
        for (let i = 1; i <= this.sudoku.rows; i++) //Pasar a generadores
          options.push(new Option(p.width - 80, i * 60 - 30, i, p));
      }

      p.draw = () => {
        p.background(220);
        this.painter.paintSudoku(this.sudoku);
        drawOptions();
      }

      function drawOptions() {
        options.forEach((x) => x.show());
      }

      p.mouseDragged = () => {
        for(let i = 0; i < options.length; i++)
          if(options[i].collides(p.mouseX, p.mouseY)){
            options[i].x = p.mouseX;
            options[i].y = p.mouseY;
          }
      }
      
      p.mouseReleased = () => {
        options.forEach( x => {
          if(x.collides(p.mouseX, p.mouseY)){
            let mapX = Math.floor(p.map(p.mouseX, 0, 545, 0, 9));
            let mapY = Math.floor(p.map(p.mouseY, 0, p.height, 0, 9));
            let data = {sudoku : this.sudoku, row : mapY, col : mapX, value : x.value}
            let result = this.sudokuHelper.validOption(data);
            if( result == "allowed") //Valid to put number there
              this.sudoku.setValue(mapY, mapX, x.value)
            else
              result == undefined ? result : alert(result); //Alert if is not valid
            x.restart();
          }
        })
      }

    }

    let myP5 = new p5(sketch);
  }

  showStorageModal(){
    if(this.loadSudokuService.retriveSudoku())
      this.modalRef = this.modalService.show(this.storeModal); 
  }

  loadStorageGame(){
    let grid = this.loadSudokuService.retriveSudoku()
    this.sudoku.fillGrid(grid)
    this.modalRef.hide()
  }

  solve() {
    return this.sudokuSolver.solve(this.sudoku);
  }

  solveByNakedSingle(){
    let interval = setInterval( () => {
      if(this.nakedSingleSolver.solve(this.sudoku))
        clearInterval(interval)
    }, 1000)
  }

  generate() {
    this.sudokuGenerator.generate(this.sudoku);
    this.sudokuHelper.generateNeighbors(this.sudoku);    
  }
  
  getDifficulty() {
    return this.communicationService.callGetDifficulty();
  }

  changeDifficulty(level) {
    this.loadSudokuService.getSudoku(level, (err, data) => {
      console.log("Cambiando DIFICULTAD llego", JSON.parse(data._body).grid)
      this.sudoku.load(JSON.parse(data._body).grid);
      this.sudokuHelper.generateNeighbors(this.sudoku);
      this.painter.paintSudoku(this.sudoku);
    });
  }

  renderGame(grid){
    this.sudoku.loadSavedMatch(grid)
    this.sudokuHelper.generateNeighbors(this.sudoku)
    this.painter.paintSudoku(this.sudoku)
  }

  saveSudoku(user) {  
    console.log(user);     
    this.saveSudokuService.saveSudoku(user, this.sudoku)    
  }

}
