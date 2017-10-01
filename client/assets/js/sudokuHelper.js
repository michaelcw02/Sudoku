export class SudokuHelper { //This class will help in some operations, to separate basic logic from other logic
	
	constructor(){
		this.subMatrix = [];
	}

	generateNeighbors(sudoku) {
		this.generateSubMatrix(sudoku);
		let grid = sudoku.grid;
		grid.forEach( (x, i) => {
			x.forEach( (elem, j) => {
				elem.setNeighbors(sudoku, this.findInSubMatrix(elem))
			} )
		} );
	}

	nextEmpty(sudoku) {
		let grid = sudoku.grid;
		let result = {};
		grid.forEach( (x, i) => {
			x.forEach( (elem, j) => {
				if( !sudoku.getValue(i, j) ) result = { row: i, col: j }
			} )
		} );
		return result;
	}

	findInSubMatrix(spot){
		return this.subMatrix.find( elem => elem.indexOf(spot) > -1 );
	}

	getSpotsWithOnePossibility(sudoku){
		let grid = sudoku.grid;
		
		return grid.reduce( (z, x) =>
			x.reduce( (acum, e) => e.countPossibilities() == 1 ? acum.concat(e) : acum , z )
		, []);
	}

	generateSubMatrix(sudoku){ //Cambiar por generadores, que acepten intervalos
		//Chen como cambiaria usted esto?
		//range(1, sudoku.rows, 3).forEach( (x, i) => { range(1, sudoku.cols, 3).forEach( (elem, j) => this.subMatrix.push( this.getSubMatrix(sudoku,i, j) ) ) } );
		for(let i = 1; i < sudoku.rows; i += 3)
			for(let j = 1; j < sudoku.cols; j += 3)
				this.subMatrix.push( this.getSubMatrix(sudoku,i, j) );
	}

	/**
	 * Creates an array of the submatrix by adding 9 spots, requires a centered i & j
	 * @param {*} sudoku 
	 * @param {*} i 
	 * @param {*} j 
	 * @return {[]} subMatrix
	 */
	getSubMatrix(sudoku,i, j){
		let subMatrix = [];
		subMatrix.push(sudoku.getSpot(i, j));
		subMatrix.push(sudoku.getSpot(i + 1, j));
		subMatrix.push(sudoku.getSpot(i - 1, j));
		subMatrix.push(sudoku.getSpot(i, j + 1));
		subMatrix.push(sudoku.getSpot(i, j - 1));
		subMatrix.push(sudoku.getSpot(i + 1, j + 1));
		subMatrix.push(sudoku.getSpot(i - 1, j - 1));
		subMatrix.push(sudoku.getSpot(i - 1, j + 1));
		subMatrix.push(sudoku.getSpot(i + 1, j - 1));
		return subMatrix;
	}
}
