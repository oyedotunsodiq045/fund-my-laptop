const Transaction = require('../models/Transaction');

class TransactionService {
  // @desc    Get all Transactions
  // @route   GET /api/v1/transactions
  // @access  Public
  getTransactions() {
    return Transaction.find();
  }

  // @desc    Get single Transaction
  // @route   GET /api/v1/transactions/:id
  // @access  Public
  getTransaction(transactionId) {
    return Transaction.findById(transactionId);
  }

  // @desc    Create new Transaction
  // @route   POST /api/v1/transactions
  // @access  Public
  createTransaction(transaction) {
    return Transaction.create(transaction);
  }

  // @desc    Update Transaction
  // @route   PUT /api/v1/transactions/:id
  // @access  Private
  updateTransaction(transactionId, transaction) {
    return Transaction.findByIdAndUpdate(transactionId, transaction, {
      new: true,
      runValidators: true,
    });
  }

  // @desc    Delete Transaction
  // @route   DELETE /api/v1/transactions/:id
  // @access  Private
  deleteTransaction(transactionId) {
    return Transaction.findByIdAndDelete(transactionId);
  }
}

module.exports = new TransactionService();

