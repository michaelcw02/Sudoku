import { SudokuHelper }             from './sudokuHelper';

export class NakedSingleSolver {

	constructor(){
		this.sudokuHelper = new SudokuHelper();
	}

	solve(sudoku){
		if(!this.sudokuHelper.hasEmptyValues(sudoku)) //If every spot has a number
            return true;
        else{
			let oldGrid = this.sudokuHelper.gridToMatrix(sudoku.grid)
            let uniques = this.sudokuHelper.getSpotsWithOnePossibility(sudoku) //Only spots who has one possibility available
            uniques.forEach( x => x.setValueAndState(x.getPossibilities().shift(), "heuristic"))
            return this.sudokuHelper.compareGrids(oldGrid, sudoku.grid) //Compares before and after naked single
        }
	}

}