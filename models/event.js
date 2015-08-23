var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  name: { type: String },
  time: { type: Date },
  location: { type: String },
  description: { type: String },
  artist: {
    name: { type: String },
    photo: { type: String }
  }
});

module.exports = mongoose.model('Event', EventSchema);