const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VerificationSchema = new Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  photoUrl: {
    type: String,
    default: 'https://res.cloudinary.com/major-stark/image/upload/v1581430383/samples/animals/three-dogs.jpg',
    required: [true, 'Please add a photo'],
  },
  videoUrl: {
    type: String,
    default: 'https://res.cloudinary.com/major-stark/video/upload/v1581430394/samples/elephants.mp4',
    required: [true, 'Please add a video'],
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Verification', VerificationSchema);
