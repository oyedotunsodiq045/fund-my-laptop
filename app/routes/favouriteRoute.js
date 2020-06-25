const express = require('express');
const {
  getFavourites,
  getFavourite,
  createFavourite,
  updateFavourite,
  deleteFavourite,
} = require('./../controllers/FavouriteController');

const router = express.Router();

router
  .route('/')
  .get(getFavourites)
  .post(createFavourite);

router
  .route('/:id')
  .get(getFavourite)
  .put(updateFavourite)
  .delete(deleteFavourite);

module.exports = router;