const express = require('express');
const {
  getAccruals,
  getAccrual,
  createAccrual,
  updateAccrual,
  deleteAccrual,
} = require('./../controllers/AccrualController');

const router = express.Router();

router
  .route('/')
  .get(getAccruals)
  .post(createAccrual);

router
  .route('/:id')
  .get(getAccrual)
  .put(updateAccrual)
  .delete(deleteAccrual);

module.exports = router;