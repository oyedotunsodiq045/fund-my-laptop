const User = require('../models/User');

class UserService {
  // @desc    Get all Users
  // @route   GET /api/v1/users
  // @access  Public
  getUsers() {
    return User.find();
  }

  // @desc    Get single User
  // @route   GET /api/v1/users/:id
  // @access  Public
  getUser(userId) {
    return User.findById(userId);
  }

  // @desc    Create new User
  // @route   POST /api/v1/users
  // @access  Public
  createUser(user) {
    return User.create(user);
  }

  // @desc    Update User
  // @route   PUT /api/v1/users/:id
  // @access  Private
  updateUser(userId, user) {
    return User.findByIdAndUpdate(userId, user, {
      new: true,
      runValidators: true,
    });
  }

  // @desc    Delete User
  // @route   DELETE /api/v1/users/:id
  // @access  Private
  deleteUser(userId) {
    return User.findByIdAndDelete(userId);
  }
}

module.exports = new UserService();
