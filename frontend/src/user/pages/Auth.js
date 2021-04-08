import React, { useState, useContext } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { AuthContext } from '../../shared/context/Auth-context';

import '../styles/Auth.css';

const Auth = (props) => {
  const auth = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [canSubmit, setCanSubmit] = useState(false);

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (!canSubmit) {

    }
    auth.login();
    console.log(auth);
  }

  const SwitchHandler = (event) => {
    event.preventDefault();
    setIsLogin(prevState => !prevState);
  }

  const onChangeHandler = (isInputValid) => {
    setCanSubmit((prevState) => (prevState || isInputValid));
  }

  return (
    <div className="auth">
      <h2>Login/signup</h2>
      <form>
        {!isLogin && <Input
          id="userid"
          element="input"
          type="text"
          label="userid"
          onChange={onChangeHandler}
        />}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          onChange={onChangeHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="password"
          onChange={onChangeHandler}
        />
        <button onClick={SubmitHandler}>{isLogin ? "Login" : "Signup"}</button>
        <button onClick={SwitchHandler}>Switch to {!isLogin ? "Login" : "Signup"}</button>
      </form>
    </div>
  );
};

export default Auth;