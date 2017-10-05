//let {Spot} = require('./spot'); //Only necessary for mocha not for p5

import { Spot }             from './spot';
import { range } 			from './utils'

export class Sudoku {

	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;

		this.grid = Array.from( new Array(this.rows), (x, i) => {
			return Array.from( new Array(this.cols), (x, j) => new Spot(i, j) )
		} )
	}

	getSpot(i, j) {
		return this.grid[i][j]
	}

	getValue(i, j) {
		return this.grid[i][j].value
	}

	setValue(i, j, value = 0) {
		this.grid[i][j].value = value
	}

	setSpot(i, j, value, def = true) {
      this.grid[i][j].value = value;
      this.grid[i][j].default = def;
    }

    clean(){
    	this.grid.forEach( (x, i) => { x.forEach( (elem, j) => {
        	elem.value = 0;
        	elem.default = false;
   		 } )} );
  	}

	load(sudoku) { //Loads from json
		range(this.rows).map((x, i) => {
			range(this.cols).map( (y, j) => this.grid[i][j] = new Spot(i, j, sudoku[i][j]) )
		});
		range(this.rows).map((x, i) => {
			range(this.cols).map( (y, j) => {
				this.grid[i][j].default = sudoku[i][j] ? true : false
			} )
		});
	}

	loadSavedMatch(sudoku){
		range(this.rows).map((x, i) => {
			range(this.cols).map( (y, j) => this.grid[i][j] = new Spot(i, j, sudoku[i][j].value) )
		});
		range(this.rows).map((x, i) => {
			range(this.cols).map( (y, j) => {
				this.grid[i][j].default = sudoku[i][j].default
			} )
		});
	}

	fillGrid(obj){
    	this.grid.forEach( (x, i) => { x.forEach( (spot, j) => {
        	spot.value = obj[i][j].value;
        	spot.default = obj[i][j].default;
   		 } )} );		
	}

}

/*module.exports = { //Remove this at working with p5
  Sudoku
}*/