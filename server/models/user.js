let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let UserSchema = new Schema( {
    name: String,
    games: []
} );

module.exports = mongoose.model('user', UserSchema);