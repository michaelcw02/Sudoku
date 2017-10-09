import { SudokuHelper }             from './sudokuHelper';

export class HiddenSingleSolver {

	constructor(){
		this.sudokuHelper = new SudokuHelper();
	}

	solve(sudoku){
		if(!this.hasEmptyValues(sudoku)) //Si ya todos los spots tienen un numero es que esta solucionado
            return true;
        else{
            //Se recorre por fila buscando las que solo tienen una posible solucion, y si la tienen se les pone
            range(sudoku.rows).forEach( x => this.spotsUniqueInRow(sudoku, x))
            range(sudoku.cols).forEach( x => this.spotsUniqueInCol(sudoku, x))
        }
	}

    spotsUniqueInRow(sudoku, row){
        let spots = sudoku.grid[row].reduce((z, x) => x.value == 0 ?
            z.concat({ spot: x, possibilities: x.getPossibilities() }) : z
        , [])
        spots.forEach(x => {
            let res = x.possibilities.filter(e => this.existsOnlyOnce(e, spots))
            x.spot.value = res.length == 1 ? res[0] : x.spot.value
        })
    }

    spotsUniqueInCol(sudoku, col){
        let spots = sudoku.grid[0][col].reduce((z, x) => x.value == 0 ?
            z.concat({ spot: x, possibilities: x.getPossibilities() }) : z
        , [])
        spots.forEach(x => {
            let res = x.possibilities.filter(e => this.existsOnlyOnce(e, spots))
            x.spot.value = res == 1 ? res[0] : x.spot.value
        })
    }

    existsOnlyOnce(elem, spots){
        return spots.reduce( (z, x) => x.possibilities.includes(elem) ? ++z : z ,0) == 1
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