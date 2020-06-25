const Verification = require('../models/Verification');

class VerificationService {
  // @desc    Get all Verifications
  // @route   GET /api/v1/verifications
  // @access  Public
  getVerifications() {
    return Verification.find();
  }

  // @desc    Get single Verification
  // @route   GET /api/v1/verifications/:id
  // @access  Public
  getVerification(verificationId) {
    return Verification.findById(verificationId);
  }

  // @desc    Create new Verification
  // @route   POST /api/v1/verifications
  // @access  Public
  createVerification(verification) {
    return Verification.create(verification);
  }

  // @desc    Update Verification
  // @route   PUT /api/v1/verifications/:id
  // @access  Private
  updateVerification(verificationId, verification) {
    return Verification.findByIdAndUpdate(verificationId, verification, {
      new: true,
      runValidators: true,
    });
  }

  // @desc    Delete Verification
  // @route   DELETE /api/v1/Verifications/:id
  // @access  Private
  deleteVerification(verificationId) {
    return Verification.findByIdAndDelete(verificationId);
  }
}

module.exports = new VerificationService();
