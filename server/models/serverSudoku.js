//const require               = require('@std/esm')
const Sudoku                = require('../../client/assets/js/sudoku')
const SudokuHelper          = require('../../client/assets/js/sudokuHelper')
const SudokuSolver          = require('../../client/assets/js/sudokuSolver')
const NakedSingleSolver     = require('../../client/assets/js/nakedSingleSolver')


class ServerSudoku {
    constructor(grid){
        this.sudoku = new Sudoku(9,9);
        this.sudokuHelper = new SudokuHelper();
        this.sudokuSolver = new SudokuSolver(sudokuHelper);
        this.nakedSingleSolver = new NakedSingleSolver();
        this.sudoku.load(grid);
        this.sudokuHelper.generateNeighbors(this.sudoku);
    }

    solve() {
        this.sudokuSolver.solve(this.sudoku);
        return minifyJsonGrid(this.sudoku.grid);
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