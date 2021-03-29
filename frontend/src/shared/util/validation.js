import React from 'react';

const nameValidation = (fieldName, fieldValue, minLength) => {
  console.log("fieldValue", fieldValue);
  if (fieldValue.trim().length === 0) {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return 'Invalid characters';
  }
  if (fieldValue.trim().length < minLength) {
    return `${fieldName} needs to be at least ${minLength} characters`;
  }
  return null;
};

const emailValidation = email => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    )
  ) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};

const ageValidation = age => {
  if (!age) {
    return 'Age is required';
  }
  if (age < 18) {
    return 'Age must be at least 18';
  }
  if (age > 99) {
    return 'Age must be under 99';
  }
  return null;
};

export {
  nameValidation
};