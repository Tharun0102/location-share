import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

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

const UserPlaces = () => {
  const userId = useParams().userId;
  const newPlaces = DUMMY_PLACES.filter((place) => place.id === userId);
  return (
    <PlaceList places={newPlaces} />
  );
};

export default UserPlaces;