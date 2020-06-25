const Request = require('../models/Request');

class RequestService {
  // @desc    Get all Requests
  // @route   GET /api/v1/requests
  // @access  Public
  getRequests() {
    return Request.find();
  }

  // @desc    Get all Active Requests
  // @route   GET /api/v1/active-requests
  // @access  Public
  getActiveRequests() {
    return Request.find({ isActive: true });
  }

  // @desc    Get all Funded Requests
  // @route   GET /api/v1/funded-requests
  // @access  Public
  getFundedRequests() {
    return Request.find({ isFunded: true });
  }

  // @desc    Get single Request
  // @route   GET /api/v1/requests/:id
  // @access  Public
  getRequest(requestId) {
    return Request.findById(requestId);
  }

  // @desc    Create new Request
  // @route   POST /api/v1/requests
  // @access  Public
  createRequest(request) {
    return Request.create(request);
  }

  // @desc    Update Request
  // @route   PUT /api/v1/requests/:id
  // @access  Private
  updateRequest(requestId, request) {
    return Request.findByIdAndUpdate(requestId, request, {
      new: true,
      runValidators: true,
    });
  }

  // @desc    Delete Request
  // @route   DELETE /api/v1/requests/:id
  // @access  Private
  deleteRequest(requestId) {
    return Request.findByIdAndDelete(requestId);
  }
}

module.exports = new RequestService();
