import React, { useState, useEffect } from 'react';
import { Auction } from '../requests';
import { NavLink } from 'react-router-dom';

const AuctionIndexPage = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    Auction.index().then((auctions) => {
      setAuctions(auctions);
    });
  }, []);

  return (
    <div className='container-fluid mt-3'>
      <h1 className='text-center'>Auctions</h1>
      {auctions.map((auction) => {
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
