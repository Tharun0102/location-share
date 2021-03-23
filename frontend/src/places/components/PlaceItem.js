import React, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';

import './styles/PlaceItem.css';

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-footer"
        footer={<button onClick={closeMapHandler}>CLOSE</button>}
      >
        <div className="map-container">
          <h2>The Map</h2>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="place-item__info">
            <h2>{props.name}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <button onClick={openMapHandler}>VIEW ON MAP</button>
            <button>EDIT</button>
            <button>DELETE</button>
          </div>
        </Card>
      </li >
    </React.Fragment>
  );
};

export default PlaceItem;