import { Component, OnInit }      from '@angular/core';

import { LoadSudokuJsonService }  from '../../services/load-sudoku-json.service';
import { SaveSudokuService }  from '../../services/save-sudoku.service';

import { Sudoku } from '../../../assets/js/sudoku';
import { Option } from '../../../assets/js/option';
import { Painter } from '../../../assets/js/painter';
import { SudokuGenerator } from '../../../assets/js/sudokuGenerator';
import { SudokuHelper } from '../../../assets/js/sudokuHelper';
import { SudokuSolver } from '../../../assets/js/sudokuSolver';
import { range } from '../../../assets/js/utils';

declare var p5: any;

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  
  jsonSudoku: any

  constructor(private saveSudokuService: SaveSudokuService) { }

  ngOnInit() {

    const sketch = (p) => {

      let sudoku = (<any>new Sudoku(9, 9));
      let painter = (<any>new Painter(60, p));
      let jsonData;
      let sudokuSolver = (<any>new SudokuSolver());
      let sudokuHelper = (<any>new SudokuHelper());
      let canvas;
      let clicked = false;
      let cursor = { x: 0, y: 0 }
      let options = []; //Move to generators please

      p.preload = () => {
        console.log('preload');
        jsonData = p.loadJSON('../../../assets/js/sudokuCases.json');
        //this.jsonSudoku = this.loadSudokuService.getSudoku('anyLevelPotentialCodeInjection')
        console.log('preload');
      }

      p.setup = () => {
        canvas = p.createCanvas(700, 545);
        canvas.parent('screen');
        p.background(255);
        let easySudoku = jsonData.cases[0];
        sudoku.load(easySudoku.easy);
        sudokuHelper.generateNeighbors(sudoku);
        painter.paintSudoku(sudoku);
        for (let i = 1; i <= sudoku.rows; i++) //Pasar a generadores
          options.push(new Option(p.width - 80, i * 60 - 30, i, p));
      }

      p.draw = () => {
        p.background(255);
        painter.paintSudoku(sudoku);
        drawOptions();
      }

      function solve() {
        return sudokuSolver.solve(sudoku);
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
            sudoku.setValue(mapY, mapX, options[i].value)
            options[i].restart();
          }
      }

    }

    let myP5 = new p5(sketch);
  }
}
