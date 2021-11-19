import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../requests';

const NavBar = ({ currentUser, onSignOut }) => {
  const handleSignOut = () => {
    Session.destroy().then(() => {
      onSignOut();
    });
  };
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>|<NavLink to='/auctions'>Auctions</NavLink>|
      <NavLink to='/sign_in'>Sign In</NavLink>
    </nav>
  );
};

export default NavBar;
