const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccrualSchema = new Schema({
  requestId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Request',
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Accrual', AccrualSchema);
