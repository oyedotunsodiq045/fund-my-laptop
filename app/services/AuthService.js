const Auth = require('../models/Auth');

class AuthService {
  // @desc    Register user
  // @route   POST /api/v1/auth/register
  // @access  Public
  register() {
    return Auth.create();
  }

  // @desc    Login user
  // @route   POST /api/v1/auth/login
  // @access  Public
  login() {
    return Auth.findOne();
  }
}

module.exports = new AuthService();
