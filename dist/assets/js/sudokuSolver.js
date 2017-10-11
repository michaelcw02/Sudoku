import { SudokuHelper }             from './sudokuHelper'

export class SudokuSolver {
	constructor(){
		this.sudokuHelper = new SudokuHelper()
	}

	solve(sudoku){
		if( !this.sudokuHelper.hasEmptyValues(sudoku) ) //Si ya todos los spots tienen un numero es que esta solucionado
			return true
		else {
				let curr = this.sudokuHelper.nextEmpty(sudoku); //Sacamos la fila y columna del primer spot vacio que encuentre
				let currentSpot = sudoku.getSpot(curr.row, curr.col);//Nos traemos al objeto en esa posicion

				for(let o = 1; o <= 9; o++){ //Para cada posibilidad
					if(currentSpot.isValidOption(o)){ //Si es valida (No esta en la fila, columna o submatriz)
						currentSpot.setValueAndState(o, "heuristic") //Value is set by the algorithm
						if(this.solve(sudoku)) //Recursive call
							return true //The sudoku is solved
					}
				}
				currentSpot.value = 0 //BACKTRACK 
			}
		return false; //Breaks recursion
	}
}