import React, { useState, useEffect } from 'react';
import { Auction } from '../requests';
import { NavLink } from 'react-router-dom';

const AuctionIndexPage = ({ currentUser }) => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    Auction.index().then((auctions) => {
      setAuctions(auctions);
    });
  }, []);

  const checkAuction = (auction) => {
    if (
      auction.state === 'published' ||
      auction.state === 'reserve met' ||
      auction.owner.id === currentUser?.id
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='container-fluid mt-3'>
      <h1 className='text-center'>Auctions</h1>
      {auctions.map((auction) => {
        if (checkAuction(auction) === true)
          return (
            <div className='card border-0'>
              <div key={auction.id} className='card-body'>
                <NavLink
                  className='card-title text-decoration-none'
                  to={`/auctions/${auction.id}`}
                >
                  <h1>{auction.title}</h1>
                </NavLink>
                <small>
                  Posted on{' '}
                  {new Date(auction.created_at).toLocaleDateString('en-CA', {
                    month: 'long',
                    day: '2-digit',
                    year: 'numeric',
                  })}
                </small>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default AuctionIndexPage;
