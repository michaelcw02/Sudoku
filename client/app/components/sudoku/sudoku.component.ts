import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { CommunicationService } from '../../services/communication.service';
import { SudokuService } from '../../services/sudoku.service';
import { LoadSudokuService } from '../../services/load-sudoku.service';
import { SaveSudokuService } from '../../services/save-sudoku.service';

import { Sudoku } from '../../../assets/js/sudoku';
import { Option } from '../../../assets/js/option';
import { Painter } from '../../../assets/js/painter';
import { SudokuGenerator } from '../../../assets/js/sudokuGenerator';
import { SudokuHelper } from '../../../assets/js/sudokuHelper';
import { SudokuSolver } from '../../../assets/js/sudokuSolver';
import { SudokuSolverStep } from '../../../assets/js/sudokuSolverStep';
import { NakedSingleSolver } from '../../../assets/js/nakedSingleSolver';
import { HiddenSingleSolver } from '../../../assets/js/hiddenSingleSolver';
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
  sudokuSolverStep: SudokuSolverStep
  hiddenSingleSolver: HiddenSingleSolver
  canvas: any
  jsonSudoku: any

  solveBySteps: any

  public modalRef: BsModalRef;

  @ViewChild('errorModal')
  private errorModal: TemplateRef<any>;

  @ViewChild('storeModal')
  private storeModal: TemplateRef<any>;

  @ViewChild('saveModal')
  private saveModal: TemplateRef<any>;

  constructor(private sudokuService: SudokuService,
    private saveSudokuService: SaveSudokuService,
    private loadSudokuService: LoadSudokuService,
    private communicationService: CommunicationService,
    private modalService: BsModalService) {


    this.sudoku = new Sudoku(9, 9);
    this.sudokuSolver = new SudokuSolver();
    this.sudokuHelper = new SudokuHelper();
    this.sudokuSolverStep = new SudokuSolverStep()
    this.sudokuGenerator = new SudokuGenerator();
    this.nakedSingleSolver = new NakedSingleSolver();
    this.hiddenSingleSolver = new HiddenSingleSolver()
    this.communicationService.solve$.subscribe(() => this.solve());
    this.communicationService.solveStepByStep$.subscribe(() => this.solveStepByStep())
    this.communicationService.reset$.subscribe(() => this.reset());
    this.communicationService.solveByNakedSingle$.subscribe(() => this.solveByNakedSingle());
    this.communicationService.solveByHiddenSingle$.subscribe(() => this.solveByHiddenSingle());
    this.communicationService.generate$.subscribe(() => {
      this.sudoku.clean();
      this.generate();
    });
    this.communicationService.changeDifficulty$.subscribe((difficulty) => this.changeDifficulty(difficulty));
    this.communicationService.saveSudoku$.subscribe((username) => this.saveSudoku(username))
    this.communicationService.renderGame$.subscribe((grid) => this.renderGame(grid))

  }



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
        this.painter.paintSudoku(this.sudoku);
        for (let i = 1; i <= this.sudoku.rows; i++) //Pasar a generadores
          options.push(new Option(p.width - 80, i * 60 - 30, i, p));
      }

      p.draw = () => {
        p.background(179, 182, 165);
        this.painter.paintSudoku(this.sudoku); //Paints every 60fps
        drawOptions();
        if (this.solveBySteps)
          this.solveBySteps = !this.sudokuSolverStep.solve(this.sudoku)
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
            if (result == "allowed") { //Valid to put number there
              if (!this.sudoku.getSpot(mapY, mapX).default)
                this.sudoku.setValue(mapY, mapX, x.value)
              else result == undefined ? result : this.openErrorModal(result); //Alert if is not valid
            }
            else
              result == undefined ? result : this.openErrorModal(result); //Alert if is not valid
            x.restart();
          }
        })
      }

      p.doubleClicked = () => {
        let mapX = Math.floor(p.map(p.mouseX, 0, 545, 0, 9));
        let mapY = Math.floor(p.map(p.mouseY, 0, p.height, 0, 9));
        let current = this.sudoku.getSpot(mapY, mapX)
        !current.default ? current.value = 0 : current
      }

      p.mousePressed = () => {
        let mapX = Math.floor(p.map(p.mouseX, 0, 545, 0, 9))
        let mapY = Math.floor(p.map(p.mouseY, 0, p.height, 0, 9))
        if (range(this.sudoku.rows).includes(mapY) && range(this.sudoku.cols).includes(mapX))
          if (!this.sudoku.getSpot(mapY, mapX).default)
            this.sudoku.setValue(mapY, mapX)
      }

    }

    let myP5 = new p5(sketch);
  }

  showStorageModal() {
    if (this.loadSudokuService.retriveSudoku())
      this.modalRef = this.modalService.show(this.storeModal);
  }

  loadStorageGame() {
    let grid = this.loadSudokuService.retriveSudoku()
    this.sudoku.fillGrid(grid)
    this.modalRef.hide()
  }

  solve() {
    //this will become a promise, so it will use .then and .catch
    (!navigator.onLine) ? this.sudokuSolver.solve(this.sudoku)
      : this.sudokuService.getSolution(this.sudoku, (err, res) => {
        err ? this.sudokuSolver.solve(this.sudoku)
          : this.sudoku.load(JSON.parse(res._body).grid)
      });
    //return this.sudokuSolver.solve(this.sudoku);
  }

  solveStepByStep() {
    this.solveBySteps = true
  }

  compareGrids(oldGrid, newGrid) {
    let result = true;
    oldGrid.forEach((x, i) => x.forEach((y, j) => {
      if (y != newGrid[i][j].value) result = false;
    }));
    if (result)
      this.showError("The sudoku couldn't be solved by Naked Single. Try another option.");
  }

  solveByNakedSingle() {
    let oldGrid = this.sudokuHelper.gridToMatrix(this.sudoku.grid);
    let interval = setInterval(() => {
      if (this.nakedSingleSolver.solve(this.sudoku)) {
        clearInterval(interval);
        this.compareGrids(oldGrid, this.sudoku.grid);
      }
    }, 1000);
  }

  solveByHiddenSingle() {
    let oldGrid = this.sudokuHelper.gridToMatrix(this.sudoku);
    let interval = setInterval(() => {
      if (this.hiddenSingleSolver.solve(this.sudoku)) {
        clearInterval(interval);
        this.compareGrids(oldGrid, this.sudoku.grid);
      }
    }, 1000)
  }

  generate() {
    this.sudokuGenerator.generate(this.sudoku);
    this.sudokuHelper.generateNeighbors(this.sudoku);
  }

  reset() {
    this.solveBySteps = false
    return this.sudokuHelper.resetSudoku(this.sudoku);
  }

  getDifficulty() {
    return this.communicationService.callGetDifficulty();
  }

  changeDifficulty(level) {
    this.sudokuService.getSudoku(level, (err, data) => {
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
    this.sudokuService.saveSudoku(user, this.sudoku, (err, res) => {
      err ? this.showError("There was an error saving the match.")
        : this.showGameSaved(user)
    })
  }

  showGameSaved(user) {
    this.modalRef = this.modalService.show(this.saveModal);
    $("#messageSave").text(user + "'s match saved successfully.");
  }

  showError(message) {
    this.modalRef = this.modalService.show(this.errorModal);
    $("#messageError").text(message);
  }


  public openErrorModal(result) {
    switch (result) {
      case "rowException":
        this.showError("The number already exists in that row.");
        break;
      case "columnException":
        this.showError("The number already exists in that column.");
        break;
      case "subMatrixException":
        this.showError("The number already exists in that sub-grid.");
        break;
      case "rowMatrixException":
        this.showError("The number already exists in that row and sub-grid.");
        break;
      case "colMatrixException":
        this.showError("The number already exists in that column and sub-grid.");
        break;
      case "rowColException":
        this.showError("The number already exists in that row and column.");
        break;
      case "allException":
        this.showError("The number already exists in that row, column and sub-grid.");
        break;
      default:
        this.showError("Invalid space.")
        break;
    }
  }
}
