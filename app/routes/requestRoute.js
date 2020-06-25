const express = require('express');
const {
  getRequests,
  getActiveRequests,
  getFundedRequests,
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
} = require('./../controllers/RequestController');

const router = express.Router();

router
  .route('/')
  .get(getRequests)
  .post(createRequest);

router
  .route('/active-requests')
  .get(getActiveRequests);

router
  .route('/funded-requests')
  .get(getFundedRequests);

router
  .route('/:id')
  .get(getRequest)
  .put(updateRequest)
  .delete(deleteRequest);

module.exports = router;