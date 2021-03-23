import React, { useState } from 'react';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';

import './styles/MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import BackDrop from '../UIElements/BackDrop';

const MainNavigation = (props) => {
  const [isDrawerOpen, setIsDraweropen] = useState(false);

  const openDrawerHandler = () => {
    setIsDraweropen(true);
  }

  const closeDrawerHandler = () => {
    setIsDraweropen(false);
  }
  return (
    <React.Fragment>
      {isDrawerOpen && <BackDrop onClick={closeDrawerHandler} />}
      {isDrawerOpen && <SideDrawer show={isDrawerOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;