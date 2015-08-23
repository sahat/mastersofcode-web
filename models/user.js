var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: { type: Number }
});

module.exports = mongoose.model('User', UserSchema);