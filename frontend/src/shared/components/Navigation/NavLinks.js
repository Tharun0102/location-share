import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/Auth-context';

import './styles/NavLinks.css';

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>All USERS</NavLink>
      </li>
      {
        auth.isLoggedIn &&
        <li>
          <NavLink to="/user/places">MY PLACES</NavLink>
        </li>
      }
      {
        auth.isLoggedIn &&
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      }
      {
        !auth.isLoggedIn &&
        <li>
          <NavLink to="/auth">LOGIN/SIGNUP</NavLink>
        </li>
      }
    </ul>
  );
};

export default NavLinks;