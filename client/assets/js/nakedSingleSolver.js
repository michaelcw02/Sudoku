import { SudokuHelper }             from './sudokuHelper';

export class NakedSingleSolver {

	constructor(){
		this.sudokuHelper = new SudokuHelper();
	}

	solve(sudoku){
		if(!this.hasEmptyValues(sudoku)) //Si ya todos los spots tienen un numero es que esta solucionado
            return true;
        else{
            let uniques = this.sudokuHelper.getSpotsWithOnePossibility(sudoku) //Only spots who has one possibility available
            uniques.forEach( x => x.value = x.getPossibilities().shift())
            return false;//ELIMINAR
        }
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