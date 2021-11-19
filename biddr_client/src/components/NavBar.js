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
    </nav>
  );
};

export default NavBar;
