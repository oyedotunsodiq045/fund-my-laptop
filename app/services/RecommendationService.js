const Recommendation = require('../models/Recommendation');

class RecommendationService {
  // @desc    Get all Recommendations
  // @route   GET /api/v1/recommendations
  // @access  Public
  getRecommendations() {
    return Recommendation.find();
  }

  // @desc    Get single Recommendation
  // @route   GET /api/v1/recommendations/:id
  // @access  Public
  getRecommendation(recommendationId) {
    return Recommendation.findById(recommendationId);
  }

  // @desc    Create new Recommendation
  // @route   POST /api/v1/recommendations
  // @access  Public
  createRecommendation(recommendation) {
    return Recommendation.create(recommendation);
  }

  // @desc    Update Recommendation
  // @route   PUT /api/v1/recommendations/:id
  // @access  Private
  updateRecommendation(recommendationId, recommendation) {
    return Recommendation.findByIdAndUpdate(recommendationId, recommendation, {
      new: true,
      runValidators: true,
    });
  }

  // @desc    Delete Recommendation
  // @route   DELETE /api/v1/recommendations/:id
  // @access  Private
  deleteRecommendation(recommendationId) {
    return Recommendation.findByIdAndDelete(recommendationId);
  }
}

module.exports = new RecommendationService();
