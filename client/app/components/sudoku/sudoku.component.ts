/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map'

import { CommunicationService } from '../../services/communication.service';
import { SudokuService } from '../../services/sudoku.service';

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
  public loading = false

  @ViewChild('errorModal')
  private errorModal: TemplateRef<any>;

  @ViewChild('storeModal')
  private storeModal: TemplateRef<any>;

  @ViewChild('successModal')
  private successModal: TemplateRef<any>;

  constructor(private sudokuService: SudokuService,
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

    window.onunload = () => this.sudokuService.storeSudoku(this.sudoku) //Local Storage

    const sketch = (p) => {
      this.painter = new Painter(60, p);
      let clicked = false;
      let options = [] //The options of the "right pane" of the canvas

      p.preload = () => {
        Promise.resolve(this.changeDifficulty('easy')) //We search for a random easy sudoku in our db
          .then(() => this.showStorageModal()) //Ask to the user if wants to retrieve the match saved in local storage
      }

      p.setup = () => {
        this.canvas = p.createCanvas(700, 545)
        this.canvas.parent('screen') //For centering the canvas
        p.background(220)
        this.painter.paintSudoku(this.sudoku)
        range(1, 10).forEach( i => {
          options.push(new Option(p.width - 80, i * 60 - 30, i, p))
        })   
      }

      p.draw = () => {
        p.background(179, 182, 165)
        this.painter.paintSudoku(this.sudoku) //Paints every 60fps
        drawOptions() //Options at the right
        if (this.solveBySteps)
          this.solveBySteps = !this.sudokuSolverStep.solve(this.sudoku)
      }

      function drawOptions() {
        options.forEach( x => x.show());
      }

      p.mouseClicked = () => {
        let mapX = Math.floor(p.map(p.mouseX, 0, 545, 0, 9))
        let mapY = Math.floor(p.map(p.mouseY, 0, p.height, 0, 9))
        this.handleErase(mapX, mapY, options) //Erase if is necessary
        options.forEach( (e, i) => {
          if(e.collides(p.mouseX, p.mouseY)) 
            e.selected ? this.handleSelection(e, mapX, mapY) : e.selected = true              
        })
      }

      p.mouseMoved = () => {
        options.filter( x => x.selected)
        options.forEach( x => x.update(p.mouseX, p.mouseY))
      } 

    }

    let myP5 = new p5(sketch);
  }

  showStorageModal() {
    if (this.sudokuService.retriveSudoku())
      this.modalRef = this.modalService.show(this.storeModal)
  }

  loadStorageGame() {
    let grid = this.sudokuService.retriveSudoku()
    this.sudoku.fillGrid(grid)
    this.modalRef.hide()
  }

  solve() {
    this.cleanUserInput();
    this.loading = true;
    (!navigator.onLine) ? this.localSolve()
                        : this.serverSolve()
  }

  localSolve() {
    this.loading = false;
    this.sudokuSolver.solve(this.sudoku);
  }

  handleSelection(option, mapX, mapY) {
    let data = { sudoku: this.sudoku, row: mapY, col: mapX, value: option.value }
    let result = this.sudokuHelper.validOption(data)
    if (result == "allowed") { //Valid to put number there
      if (this.sudoku.getSpot(mapY, mapX).state == "possible")
        this.sudoku.setValue(mapY, mapX, option.value)
      else result == undefined ? result : this.openErrorModal(result) //Modal-Alert if is not valid
    }
    else
      result == undefined ? result : this.openErrorModal(result) //Modal-Alert if is not valid
    option.selected = false
    option.restart()
  }

  handleErase(mapX, mapY, options){
    if(range(this.sudoku.rows).includes(mapY) && range(this.sudoku.cols).includes(mapX))
      if (this.sudoku.getSpot(mapY, mapX).state == "possible" && options.every( x => !x.selected)) 
        this.sudoku.setValue(mapY, mapX) //Puts to zero
  }

  serverSolve() {
    this.sudokuService.getSolution(this.sudoku)
        .subscribe(
          res => {
            this.loading = false
            this.sudoku.load(res.grid)
          },
          err => {
            this.loading = false
            this.sudokuSolver.solve(this.sudoku)
          }
        )
  }
  
  solveStepByStep(){
    this.cleanUserInput()
    this.solveBySteps = true
  }

  solveByNakedSingle() {
    this.cleanUserInput()
    let interval = setInterval(() => {
      if (this.nakedSingleSolver.solve(this.sudoku)) {
        clearInterval(interval)
        this.sudokuHelper.hasEmptyValues(this.sudoku) ? 
        this.showError("The sudoku couldn't be solved by NakedSingle. Try another option.") :
        this.showSuccess("Solved", "The sudoku was solved")
      }
    }, 1000)
  }

  solveByHiddenSingle() {
    this.cleanUserInput()
    let interval = setInterval(() => {
      if (this.hiddenSingleSolver.solve(this.sudoku)) {
        clearInterval(interval);
        this.sudokuHelper.hasEmptyValues(this.sudoku) ? 
        this.showError("The sudoku couldn't be solved by HiddenSingle. Try another option.") :
        this.showSuccess("Solved", "The sudoku was solved")
      }
    }, 1000)
  }

  generate() {
    this.sudokuHelper.resetSudoku(this.sudoku)
    this.sudokuGenerator.generate(this.sudoku)
    this.sudokuHelper.generateNeighbors(this.sudoku)
  }

  reset() {
    this.solveBySteps = false
    this.sudokuHelper.resetSudoku(this.sudoku)
    this.sudokuHelper.resetNeighbors(this.sudoku)
    this.sudokuHelper.generateNeighbors(this.sudoku)
  }

  getDifficulty() {
    return this.communicationService.callGetDifficulty();
  }

  changeDifficulty(level) {
    this.sudokuService.getSudoku(level, (err, data) => {
      this.sudoku.load(JSON.parse(data._body).grid)
      this.sudokuHelper.generateNeighbors(this.sudoku)
      this.painter.paintSudoku(this.sudoku)
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
        : this.showSuccess("Saved", "Match saved successfully.");
    })
  }

  /* Only clears values set by the user */ 

  cleanUserInput(){
    this.sudokuHelper.resetSudoku(this.sudoku, z => z == "possible")
  }

  showSuccess(title, message) {
    this.modalRef = this.modalService.show(this.successModal);
    $("#titleSuccess").text(title);
    $("#messageSuccess").text(message);
  }

  showError(message) {
    this.modalRef = this.modalService.show(this.errorModal)
    $("#messageError").text(message)
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

  @ViewChild('waitModal')
  private waitModal: TemplateRef<any>
  public openWaitModal(result) {
    this.modalRef = this.modalService.show(this.waitModal)
    $("#messageWait").text(result)
  }
  
}
