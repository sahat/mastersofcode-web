var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: { type: Number },
  phoneNumber: { type: String }
});

module.exports = mongoose.model('User', UserSchema);