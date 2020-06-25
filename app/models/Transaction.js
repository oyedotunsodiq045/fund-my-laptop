const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  requestId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Request',
    required: true,
  },
  statement: {
    type: Number,
    required: true,
  },
  transactionReference: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: [String],
    enum: ['', ''],
  },
  responseCode: {
    type: Number,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
