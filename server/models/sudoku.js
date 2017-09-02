let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let SudokuSchema = new Schema( {
    level: String,
    grid: [[]]
} );

module.exports = mongoose.model('sudoku', SudokuSchema);