import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';

import './styles/UpdatePlace.css';

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
        name: "piler2",
        description: "pileru town",
        image: "https://lh5.googleusercontent.com/p/AF1QipNATUhrSMxLfATjZofh4El8Mkgtd1jy2X-bf0uH=w426-h240-k-no",
        address: "20 w ,AP,IND",
        coordinates: { lat: 20, long: 30 },
        creatorId: "u2"
    }
];

const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
}

const UpdatePlace = (props) => {
    console.log("edit");
    const placeId = useParams().placeId;
    const currPlace = DUMMY_PLACES.find((place) => place.id === placeId);

    if (!currPlace) {
        return <div className="center">
            <h2>Couldn't find place!</h2>
        </div>
    }
    return (
        <form className="edit-form">
            <Input
                id={placeId}
                element="input"
                type="text"
                label="Title"
                placeholder="input1"
            />
            <Input
                id={placeId}
                element="textarea"
                type="text"
                label="Description"
                placeholder="input1"
            />
            <button className="button" onClick={submitHandler}>UPDATE</button>
        </form>
    );
};

export default UpdatePlace;