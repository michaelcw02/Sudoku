let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let SudokuSchema = new Schema( {
    mode: String,
    grid: [[]]
} );

module.exports = mongoose.model('Sudoku', SudokuSchema);