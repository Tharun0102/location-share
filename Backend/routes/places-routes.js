const express = require('express');
const router = express.Router();

const placeControllers = require('../controllers/places-controllers');

router.get('/:placeID', placeControllers.getPlaceById);

router.get('/user/:userID', placeControllers.getPlaceByUserId);

router.post('/', placeControllers.createPlace);

module.exports = router;