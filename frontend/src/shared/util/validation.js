
const nameValidation = (fieldName, fieldValue, minLength) => {
  if (fieldValue.trim().length === 0) {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z0-9 -]/.test(fieldValue)) {
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
  if (email.trim().length === 0) {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};

export {
  nameValidation,
  emailValidation
};