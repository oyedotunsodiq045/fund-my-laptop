const express = require('express');
const {
  getVerifications,
  getVerification,
  createVerification,
  updateVerification,
  deleteVerification,
} = require('./../controllers/VerificationController');

const router = express.Router();

router
  .route('/')
  .get(getVerifications)
  .post(createVerification);

router
  .route('/:id')
  .get(getVerification)
  .put(updateVerification)
  .delete(deleteVerification);

module.exports = router;