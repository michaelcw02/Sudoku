import { Spot } 	from './spot'
import { range } 	from './utils'

export class Sudoku {

	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;
		this.grid = Array.from(new Array(this.rows), (x, i) => {
			return Array.from(new Array(this.cols), (x, j) => new Spot(i, j))
		})
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

	setSpot(i, j, value, state = "default") {
		this.grid[i][j].value = value;
		this.grid[i][j].state = state;
	}

	setValueAndState(i, j, value, state){
		this.grid[i][j].setValueAndState(value, state)
	}

	clean() {
		this.grid.forEach((x, i) => {
			x.forEach((elem, j) => {
				elem.value = 0;
				elem.state = "possible";
			})
		});
	}

	load(sudoku) {
		range(this.rows).map((x, i) => {
			range(this.cols).map((y, j) => 
				this.grid[i][j] = new Spot(i, j, (sudoku[i][j].value != undefined) 
				? sudoku[i][j].value //For Saved Matches
				: sudoku[i][j])) //For Sudokus loaded by simple JSONS
		});
		range(this.rows).map((x, i) => {
			range(this.cols).map((y, j) => {
				this.grid[i][j].state = (sudoku[i][j].state != undefined) 
				? sudoku[i][j].state //For Saved Matches
				: sudoku[i][j] ? "default" : "possible" //For Sudokus loaded by simple JSONS
			})
		});
	}

	fillGrid(obj) {
		this.grid.forEach((x, i) => {
			x.forEach((spot, j) => {
				spot.value = obj[i][j].value;
				spot.state = obj[i][j].state;
			})
		});
	}

}

