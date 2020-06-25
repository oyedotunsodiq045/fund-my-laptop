const Accrual = require('../models/Accrual');

class AccrualService {
  // @desc    Get all Accruals
  // @route   GET /api/v1/accruals
  // @access  Public
  getAccruals() {
    return Accrual.find();
  }

  // @desc    Get single Accrual
  // @route   GET /api/v1/accruals/:id
  // @access  Public
  getAccrual(accrualId) {
    return Accrual.findById(accrualId);
  }

  // @desc    Create new Accrual
  // @route   POST /api/v1/accruals
  // @access  Public
  createAccrual(accrual) {
    return Accrual.create(accrual);
  }

  // @desc    Update Accrual
  // @route   PUT /api/v1/accruals/:id
  // @access  Private
  updateAccrual(accrualId, accrual) {
    return Accrual.findByIdAndUpdate(accrualId, accrual, {
      new: true,
      runValidators: true,
    });
  }

  // @desc    Delete Accrual
  // @route   DELETE /api/v1/accruals/:id
  // @access  Private
  deleteAccrual(accrualId) {
    return Accrual.findByIdAndDelete(accrualId);
  }
}

module.exports = new AccrualService();
