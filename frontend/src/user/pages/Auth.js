import React from 'react';
import Input from '../../shared/components/FormElements/Input';

import '../styles/Auth.css';

const LoginHandler = (event) => {
  event.preventDefault();
}
const SignupHandler = (event) => {
  event.preventDefault();
}
const Auth = () => {
  return (
    <div className="auth">
      <h2>Login/signup</h2>
      <form>
        <Input
          id="userid"
          element="input"
          type="text"
          label="userid"
        />
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
        />
        <button onClick={LoginHandler}>Login</button>
        <button onClick={SignupHandler}>Signup</button>
      </form>
    </div>
  );
};

export default Auth;