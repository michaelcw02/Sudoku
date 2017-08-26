//let {Spot} = require('./spot'); //Only necessary for mocha not for p5

class Sudoku {

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

}

/*module.exports = { //Remove this at working with p5
  Sudoku
}*/