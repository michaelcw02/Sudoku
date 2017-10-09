import { Sudoku }               from '../../client/assets/js/sudoku'
import { SudokuHelper }         from '../../client/assets/js/sudokuHelper'
import { SudokuSolver }         from '../../client/assets/js/sudokuSolver'


class ServerSudoku {
    constructor(grid){
        this.sudoku = new Sudoku(9,9);
        this.sudokuHelper = new SudokuHelper();
        this.sudokuSolver = new SudokuSolver(this.sudokuHelper);
        this.sudoku.load(grid);
        this.sudokuHelper.generateNeighbors(this.sudoku);
    }

    solve() {
        return Promise.resolve(this.sudokuSolver.solve(this.sudoku))
                      .then( x => Promise.resolve(this.minifyJsonGrid(this.sudoku.grid)));
    }

    minifyJsonGrid(grid) {
        let obj = grid.map(x => x);
        let result = Array.from(new Array(9), (x, i) => {
            return Array.from(new Array(9), (x, j) => {
                return { value: obj[i][j].value, default: obj[i][j].default }
            })
        })
        return result;
    }
}
module.exports = ServerSudoku