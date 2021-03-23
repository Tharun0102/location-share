import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: '1',
    name: "piler",
    description: "pileru town",
    image: "",
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

const UserPlaces = () => {
  const userId = useParams().userId;
  const newPlaces = DUMMY_PLACES.filter((place) => place.id === userId);
  return (
    <PlaceList places={newPlaces} />
  );
};

export default UserPlaces;