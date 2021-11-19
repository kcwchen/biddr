import React, { useState, useEffect } from 'react';
import { Auction } from '../requests';

const AuctionIndexPage = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    Auction.index().then((auctions) => {
      console.log(auctions);
      setAuctions(auctions);
    });
  }, []);

  return (
    <div>
      {auctions.map((auction) => {
        return (
          <div key={auction.id}>
            <h1>{auction.title}</h1>
            <small>
              Posted on{' '}
              {new Date(auction.created_at).toLocaleDateString('en-CA', {
                month: 'long',
                day: '2-digit',
                year: 'numeric',
              })}
            </small>
          </div>
        );
      })}
    </div>
  );
};

export default AuctionIndexPage;
