const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
    maxlength: [50, 'title can not be more than 50 characters']
  },
  description: {
    type: text,
    required: true,
    minlength: [50, 'Description must be more than 50 characters'],
    maxlength: [255, 'Description can not be more than 255 characters'],
  },
  photoUrl: {
    type: String,
    default: 'https://res.cloudinary.com/major-stark/image/upload/v1581430383/samples/animals/three-dogs.jpg',
    required: [true, 'Please add a photo'],
  },
  amount: {
    type: Number,
    required: true,
  },
  isFunded: {
    type: Boolean,
    default: false,
  },
  isSuspended: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Request', RequestSchema);
