import { SudokuHelper }             from './sudokuHelper';

export class SudokuSolverStep {
	constructor(){
        this.sudokuHelper = new SudokuHelper();
        this.stack = []
        this.backtrack = false
	}

	solve(sudoku){
		if( !this.hasEmptyValues(sudoku) ) //Si ya todos los spots tienen un numero es que esta solucionado
			return true
		else {
                let curr = this.sudokuHelper.nextEmpty(sudoku)
                let currentSpot = sudoku.getSpot(curr.row, curr.col)//Nos traemos al objeto en esa posicion
                let o = 1
                if(this.backtrack){
                    let back = this.stack.pop()
                    o = back.value + 1
                    currentSpot = back.last
                    0 == 10 ? currentSpot.value = 0 : currentSpot
                    this.backtrack = false
                }
                for( ; o <= 9; o++){ //Para cada posibilidad
					if(currentSpot.isValidOption(o)){ //Si es valida (No esta en la fila, columna o submatriz)
                        sudoku.setValue(currentSpot.row, currentSpot.col, o); //Le metemos el valor
                            this.stack.push({last: currentSpot, value : o})
                            return false
					}
                }
                let lastSpot = this.lastInStack().last
                sudoku.setValue(lastSpot.row, lastSpot.col);
                this.backtrack = true
			}
    }

    lastInStack(){
       return this.stack[this.stack.length - 1]
    }
    

	//Pasar a funcional
	hasEmptyValues(sudoku){ //Auxiliar to see if sudoku is solved, this should be in sudoku helper
		for(let i = 0; i < sudoku.rows; i++)
			for(let j = 0; j < sudoku.cols; j++)
				if(sudoku.getValue(i, j) === 0)
					return true;
		return false;
	}
}