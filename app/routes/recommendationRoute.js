const express = require('express');
const {
  getRecommendations,
  getRecommendation,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation,
} = require('./../controllers/RecommendationController');

const router = express.Router();

router
  .route('/')
  .get(getRecommendations)
  .post(createRecommendation);

router
  .route('/:id')
  .get(getRecommendation)
  .put(updateRecommendation)
  .delete(deleteRecommendation);

module.exports = router;