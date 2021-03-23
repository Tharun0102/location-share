import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

import './styles/PlaceList.css';

const PlaceList = ({ places }) => {
    if (places.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No Places found!</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        );
    }

    return (
        <ul className="place-list">
            {places.map((place) => {
                return (
                    <PlaceItem
                        key={place.id}
                        id={place.id}
                        image={place.image}
                        name={place.name}
                        description={place.description}
                        address={place.address}
                        coordinates={place.location}
                        creatorId={place.creatorId}
                    />
                );
            })}
        </ul>
    );
};

export default PlaceList;