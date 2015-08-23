var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DonationSchema = new mongoose.Schema({
  amount: { type: Number },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  event: { type: Schema.Types.ObjectId, ref: 'Event' }
});

module.exports = mongoose.model('Donation', DonationSchema);