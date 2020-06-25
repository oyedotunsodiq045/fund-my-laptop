const express = require('express');
const {
  getAuths,
  getAuth,
  createAuth,
  updateAuth,
  deleteAuth,
} = require('./../controllers/AuthController');

const router = express.Router();

router
  .route('/')
  .get(getAuths)
  .post(createAuth);

router
  .route('/:id')
  .get(getAuth)
  .put(updateAuth)
  .delete(deleteAuth);

module.exports = router;