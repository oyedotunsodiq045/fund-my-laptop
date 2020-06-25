const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please add your first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please add your first name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number can not be longer than 20 characters'],
  },
  password: {
    type: String,
    required: [true, 'Please add a passord'],
    minlength: 6,
    select: false, // what this will do is when we get a user through our API it's not going to show the password
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  role: {
    type: [String],
    enum: ['user', 'investor'],
    default: 'user',
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
