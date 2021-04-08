import React, { useState } from 'react';
import { emailValidation, nameValidation } from '../../util/validation';

import './Input.css';


const Input = (props) => {
  const [inputState, setInputState] = useState({
    value: '',
    isValid: false,
    isTouched: false,
    errorMessage: `${props.label} is required`
  });

  const onChangeHandler = (event) => {
    const value = event.target.value;
    const errorMsg = (props.type === 'text' || props.type === 'password') ? nameValidation(props.label, value, 6) : emailValidation(value);
    setInputState({
      ...inputState,
      value,
      isValid: errorMsg === null,
      errorMessage: errorMsg
    });
    props.onChange(inputState.isValid);
  }

  const touchHandler = () => {
    setInputState({
      ...inputState,
      isTouched: true
    });
  }

  const element = (props.element === 'input')
    ? <input
      // minLength={props.minLength === undefined ? 0 : props.minLength}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={onChangeHandler}
      value={inputState.value}
      onBlur={touchHandler}
    />
    : <textarea
      id={props.id}
      rows={props.rows || 3}
      onChange={onChangeHandler}
      value={inputState.value}
      onBlur={touchHandler}
    />;
  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{inputState.errorMessage}</p>}
    </div>
  );
};

export default Input;