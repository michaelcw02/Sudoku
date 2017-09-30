let mongoose = require('mongoose');
let random   = require('mongoose-simple-random')

let Schema   = mongoose.Schema;

let SudokuSchema = new Schema( {
    level: String,
    grid: [[]],
    date: Date
} );
SudokuSchema.plugin(random)


module.exports = mongoose.model('sudoku', SudokuSchema);