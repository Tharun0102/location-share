const HttpError = require('../models/http-error');
const uuid = require('uuidv4');

const DUMMY_PLACES = [
  {
    id: '1',
    name: "piler",
    description: "pileru town",
    image: "https://lh5.googleusercontent.com/p/AF1QipNATUhrSMxLfATjZofh4El8Mkgtd1jy2X-bf0uH=w426-h240-k-no",
    address: "20 w ,AP,IND",
    coordinates: { lat: 20, long: 30 },
    creatorId: "u1"
  },
  {
    id: '2',
    name: "piler",
    description: "pileru town",
    image: "",
    address: "20 w ,AP,IND",
    coordinates: { lat: 20, long: 30 },
    creatorId: "u2"
  }
];

const getPlaceById = (req, res, next) => {
  const placeID = req.params.placeID;
  const place = DUMMY_PLACES.find((p) => p.id == placeID);
  if (!place) {
    throw new HttpError('could not find a place p', 404);
  }
  res.json({ place });
}


const getPlaceByUserId = (req, res, next) => {
  const userID = req.params.userID;
  const places = DUMMY_PLACES.filter((p) => p.creatorId === userID);
  if (!places) {
    next(new Error('could not find a place p', 404));
  }
  res.json({ places });
}

const createPlace = (req, res, next) => {
  const { name, description, coordinates, address, creatorId } = req.body;
  const newPlace = {
    id: uuid(),
    name,
    description,
    coordinates,
    address,
    creatorId
  }
  DUMMY_PLACES.push(newPlace);

  res.status(201).json({ place: newPlace });
}

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
