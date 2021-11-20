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
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          <img
            src='https://mpng.subpng.com/20190629/pxu/kisspng-portable-network-graphics-auction-clip-art-vector-judge-clipart-law-office-judge-law-office-transpa-5d17b3fed59290.6349147915618344948748.jpg'
            alt='logo'
            width='25'
            height='25'
          />{' '}
          Biddr
        </NavLink>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/auctions'>
              Auctions
            </NavLink>
          </li>
          {currentUser ? (
            <>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/auctions/new'>
                  New Auction
                </NavLink>
              </li>
              <li className='nav-item'>
                <a className='nav-link disabled' href='#'>
                  {currentUser.first_name}
                </a>
              </li>
              <li className='nav-item'>
                <button
                  className='nav-link border-0 p-2'
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/sign_in'>
                  Sign In
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/sign_up'>
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
