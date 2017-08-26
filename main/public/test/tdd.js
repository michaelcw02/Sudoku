const assert    = require('assert');
const fs        = require('fs');

let {Spot}   = require('../spot.js');
let {Sudoku}   = require('../sudoku.js');

let mySudoku = new Sudoku(9, 9);

describe('Sudoku', function () {

    describe('Creation of an empty 9x9 sudoku', function () {
        it('#Empty 9x9 sudoku', function () {
            assert.deepEqual( mySudoku.rows, 9 )
            assert.deepEqual( mySudoku.cols, 9 )
        })
	})

})