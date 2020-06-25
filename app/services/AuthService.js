const Auth = require('../models/Auth');

class AccrualService {
  // @desc    Register user
  // @route   POST /api/v1/auth/register
  // @access  Public
  register() {
    return Accrual.find();
  }

  // @desc    Login user
  // @route   POST /api/v1/auth/login
  // @access  Public
  login() {
    return Accrual.findById();
  }
}

module.exports = new AccrualService();


