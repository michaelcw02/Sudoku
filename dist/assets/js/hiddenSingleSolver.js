import { SudokuHelper }             from './sudokuHelper'
import { range } 	                from './utils'

export class HiddenSingleSolver {

	constructor(){
		this.sudokuHelper = new SudokuHelper();
	}

	solve(sudoku){
		if(!this.sudokuHelper.hasEmptyValues(sudoku)) //Si ya todos los spots tienen un numero es que esta solucionado
            return true;
        else{
            //Se recorre por fila buscando las que solo tienen una posible solucion, y si la tienen se les pone
            let oldGrid = this.sudokuHelper.gridToMatrix(sudoku.grid)
            range(sudoku.rows).forEach( x => this.spotsUniqueInRow(sudoku, x))
            range(sudoku.cols).forEach( x => this.spotsUniqueInCol(sudoku, x))
            range(1, 9, 3).forEach( row => {
                range(1, 9, 3).forEach( col => {
                    this.spotsUniqueInSubMatrix(this.sudokuHelper.getSubMatrix(sudoku, row, col))
                })
            })
            return this.sudokuHelper.compareGrids(oldGrid, sudoku.grid)
        }
	}

    spotsUniqueInRow(sudoku, row){
        let spots = sudoku.grid[row].reduce((z, x) => x.value == 0 ?
            z.concat({ spot: x, possibilities: x.getPossibilities() }) : z
        , [])
        this.updateUniqueSpots(spots)
    }

    spotsUniqueInCol(sudoku, col){
        let grid = sudoku.grid
        let spots = range(sudoku.rows).reduce((z, x) => sudoku.getValue(x, col) == 0 ?
            z.concat({ spot: sudoku.getSpot(x, col), possibilities: sudoku.getSpot(x, col).getPossibilities() }) : z
        , [])
        this.updateUniqueSpots(spots)
    }

    spotsUniqueInSubMatrix(subMatrix){
        let spots = subMatrix.reduce((z, x) => x.value == 0 ?
            z.concat({ spot: x, possibilities: x.getPossibilities() }) : z
        , [])
        this.updateUniqueSpots(spots)
    }

    updateUniqueSpots(spots){
        spots.forEach(x => {
            let res = x.possibilities.filter(e => this.existsOnlyOnce(e, spots))
            x.spot.value = res.length == 1 ? res[0] : x.spot.value
            x.spot.state = res.length == 1 ? "heuristic" : x.spot.state
        })
    }

    existsOnlyOnce(elem, spots){
        return spots.reduce( (z, x) => x.possibilities.includes(elem) ? ++z : z ,0) == 1
    }
}