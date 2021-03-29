import React, { } from 'react';
import Input from '../../shared/components/FormElements/Input';

import './styles/NewPlace.css';

const NewPlace = (props) => {
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorMessage="Please enter a valid text"
      // onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Title"
        validators={[]}
        errorMessage="Please enter min. 5 chars"
      // onInput={titleInputHandler}
      />
    </form>
  );
};

export default NewPlace;