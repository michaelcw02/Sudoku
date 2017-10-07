import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { CommunicationService } from '../../services/communication.service';
import { SudokuService }        from '../../services/sudoku.service';

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

  constructor( private communicationService: CommunicationService,
               private sudokuService: SudokuService,
               private modalService: BsModalService ) {

    this.sudoku = new Sudoku(9, 9);
    this.sudokuSolver = new SudokuSolver();
    this.sudokuHelper = new SudokuHelper();
    this.sudokuGenerator = new SudokuGenerator();
    this.nakedSingleSolver = new NakedSingleSolver();
    this.communicationService.solve$.subscribe(() => this.solve());
    this.communicationService.solveByNakedSingle$.subscribe(() => this.solveByNakedSingle());
    this.communicationService.generate$.subscribe(() => {
      this.sudoku.clean();
      this.generate();
    });
    this.communicationService.changeDifficulty$.subscribe((difficulty) => this.changeDifficulty(difficulty));
    this.communicationService.saveSudoku$.subscribe((username) => this.saveSudoku(username))
    this.communicationService.renderGame$.subscribe((grid) => this.renderGame(grid))
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
        p.background(179,182,165);
        this.painter.paintSudoku(this.sudoku);
        drawOptions();
      }

      function drawOptions() {
        options.forEach((x) => x.show());
      }

      p.mouseDragged = () => {
        for (let i = 0; i < options.length; i++)
          if (options[i].collides(p.mouseX, p.mouseY)) {
            options[i].x = p.mouseX;
            options[i].y = p.mouseY;
          }
      }

      p.mouseReleased = () => {
        options.forEach(x => {
          if (x.collides(p.mouseX, p.mouseY)) {
            let mapX = Math.floor(p.map(p.mouseX, 0, 545, 0, 9));
            let mapY = Math.floor(p.map(p.mouseY, 0, p.height, 0, 9));
            let data = { sudoku: this.sudoku, row: mapY, col: mapX, value: x.value }
            let result = this.sudokuHelper.validOption(data);
            if (result == "allowed") //Valid to put number there
              this.sudoku.setValue(mapY, mapX, x.value)
            else
              result == undefined ? result : this.openModal(result); //Alert if is not valid
            x.restart();
          }
        })
      }

    }
    let myP5 = new p5(sketch);
  }

  solve() {
    //this will become a promise, so it will use .then and .catch
    (!navigator.onLine) ? this.sudokuSolver.solve(this.sudoku)
                        : this.sudokuService.getSolution(this.sudoku, (err, res) => {
                          if(err) this.sudokuSolver.solve(this.sudoku)
                          res = JSON.parse(res._body)
                          console.log(res.message)
                          this.sudoku.load(res.grid)
                        });
  }

  solveByNakedSingle() {
    let interval = setInterval(() => {
      if (this.nakedSingleSolver.solve(this.sudoku))
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
    this.sudokuService.getSudoku(level, (err, data) => {
      console.log("Cambiando DIFICULTAD llego", JSON.parse(data._body).grid)
      this.sudoku.load(JSON.parse(data._body).grid);
      this.sudokuHelper.generateNeighbors(this.sudoku);
      this.painter.paintSudoku(this.sudoku);
    });
  }

  renderGame(grid) {
    this.sudoku.load(grid)
    this.sudokuHelper.generateNeighbors(this.sudoku)
    this.painter.paintSudoku(this.sudoku)
  }

  saveSudoku(user) {
    console.log(user);
    this.sudokuService.saveSudoku(user, this.sudoku)
  }


  @ViewChild('errorModal')
  private errorModal: TemplateRef<any>;

  public openModal(result) {
    this.modalRef = this.modalService.show(this.errorModal);
    switch (result) {
      case "rowException":
        $("#messageError").text("The number already exists in that row.");
        break;
      case "columnException":
        $("#messageError").text("The number already exists in that column.");
        break;
      case "subMatrixException":
        $("#messageError").text("The number already exists in that sub-grid.");
        break;
      case "rowMatrixException":
        $("#messageError").text("The number already exists in that row and sub-grid.");
        break;
      case "colMatrixException":
        $("#messageError").text("The number already exists in that column and sub-grid.");
        break;
      case "rowColException":
        $("#messageError").text("The number already exists in that row and column.");
        break;
      case "allException":
        $("#messageError").text("The number already exists in that row, column and sub-grid.");
        break;
      default:
        $("#messageError").text("Unknown error.")
        break;
    }
  }

}
