
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SudokuSchema   = new Schema({
	sudoku: [[]]
});

module.exports = mongoose.model('Sudoku', SudokuSchema);