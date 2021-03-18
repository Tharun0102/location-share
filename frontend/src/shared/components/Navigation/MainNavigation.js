import React from 'react';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';

import './styles/MainNavigation.css';

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn" >
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav>
        ...
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;