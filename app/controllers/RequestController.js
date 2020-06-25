const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const RequestService = require('../services/RequestService');

class RequestController {
  // @desc    Get all Requests
  // @route   GET /api/v1/requests
  // @access  Public
  getRequests = asyncHandler(async (req, res, next) => {
    const requests = await RequestService.getRequests();

    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  });

  // @desc    Get all Active Requests
  // @route   GET /api/v1/active-requests
  // @access  Public
  getActiveRequests = asyncHandler(async (req, res, next) => {
    const requests = await RequestService.getActiveRequests();

    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  });

  // @desc    Get all Funded Requests
  // @route   GET /api/v1/funded-requests
  // @access  Public
  getFundedRequests = asyncHandler(async (req, res, next) => {
    const requests = await RequestService.getFundedRequests();

    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  });

  // @desc    Get single Request
  // @route   GET /api/v1/requests/:id
  // @access  Public
  getRequest = asyncHandler(async (req, res, next) => {
    const requests = await RequestService.getRequest();

    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  });

  // @desc    Create new Request
  // @route   POST /api/v1/requests
  // @access  Public
  createRequest = asyncHandler(async (req, res, next) => {
    const requests = await RequestService.createRequest(req.body);

    res.status(201).json({
      success: true,
      data: requests,
    });
  });

  // @desc    Update Request
  // @route   PUT /api/v1/requests/:id
  // @access  Private
  updateRequest = asyncHandler(async (req, res, next) => {
    const request = await RequestService.updateRequest(req.params.id, req.body);

    if (!request) {
      return next(
        new ErrorResponse(`Request not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: request,
    });
  });

  // @desc    Delete Request
  // @route   DELETE /api/v1/requests/:id
  // @access  Private
  deleteRequest = asyncHandler(async (req, res, next) => {
    const request = await RequestService.deleteRequest(req.params.id);

    if (!request) {
      return next(
        new ErrorResponse(`Request not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  });
}

module.exports = new RequestController();
