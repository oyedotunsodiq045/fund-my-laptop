const Favourite = require('../models/Favourite');

class FavouriteService {
  // @desc    Get all Favourites
  // @route   GET /api/v1/favourites
  // @access  Public
  getFavourites() {
    return Favourite.find();
  }

  // @desc    Get single Favourite
  // @route   GET /api/v1/favourites/:id
  // @access  Public
  getFavourite(favouriteId) {
    return Favourite.findById(favouriteId);
  }

  // @desc    Create new Favourite
  // @route   POST /api/v1/favourites
  // @access  Public
  createFavourite(favourite) {
    return Favourite.create(favourite);
  }

  // @desc    Update Favourite
  // @route   PUT /api/v1/favourites/:id
  // @access  Private
  updateFavourite(favouriteId, favourite) {
    return Favourite.findByIdAndUpdate(favouriteId, favourite, {
      new: true,
      runValidators: true,
    });
  }

  // @desc    Delete Favourite
  // @route   DELETE /api/v1/favourites/:id
  // @access  Private
  deleteFavourite(favouriteId) {
    return Favourite.findByIdAndDelete(favouriteId);
  }
}

module.exports = new FavouriteService();

