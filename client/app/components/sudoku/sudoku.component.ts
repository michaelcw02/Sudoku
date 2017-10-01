import { Component, OnInit }      from '@angular/core';

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
  
  constructor(private loadSudokuService: LoadSudokuService, 
              private saveSudokuService: SaveSudokuService, 
              private communicationService: CommunicationService){
                
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

  ngOnInit() {

    const sketch = (p) => {
      this.painter = new Painter(60, p);
      let clicked = false;
      let options = []
      
      p.preload = () => {
        //jsonData = p.loadJSON('../../../assets/js/sudokuCases.json');
        this.changeDifficulty('easy');
        //this.jsonSudoku = this.loadSudokuService.getSudoku('anyLevelPotentialCodeInjection')
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
        for(let i = 0; i < options.length; i++)
          if(options[i].collides(p.mouseX, p.mouseY)){
            let mapX = Math.floor(p.map(p.mouseX, 0, 545, 0, 9));
            let mapY = Math.floor(p.map(p.mouseY, 0, p.height, 0, 9));  
            this.sudoku.setValue(mapY, mapX, options[i].value)
            options[i].restart();
          }
      }

    }
    let myP5 = new p5(sketch);
  }

  solve() {
    return this.sudokuSolver.solve(this.sudoku);
  }

  solveByNakedSingle(){
    console.log("Solving by naked single")
    return this.nakedSingleSolver.solve(this.sudoku)
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
