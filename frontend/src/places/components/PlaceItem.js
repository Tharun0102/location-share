import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';

import './styles/PlaceItem.css';

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const deleteHandler = () => setDeleteModal(true);
  const closeDeleteModal = () => setDeleteModal(false);

  return (
    <React.Fragment>
      {/* view on map */}
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-footer"
        footer={<button style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }} onClick={closeMapHandler}>CLOSE</button>}
      >
        <div className="map-container">
          <h2>The Map</h2>
        </div>
      </Modal>
      {/* delete */}
      <Modal
        show={deleteModal}
        onCancel={closeDeleteModal}
        header={<header>Are you sure you want to delete?</header>}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-footer"
        footer={
          <React.Fragment>
            <button onClick={closeDeleteModal}>CLOSE</button>
            <button onClick={deleteHandler}>DELETE</button>
          </React.Fragment>
        }
      >
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
            <button className="button" onClick={openMapHandler}>VIEW ON MAP</button>
            <Link to={`/places/${props.id}`}><button className="button">EDIT</button></Link>
            <button className="button">DELETE</button>
          </div>
        </Card>
      </li >
    </React.Fragment >
  );
};

export default PlaceItem;