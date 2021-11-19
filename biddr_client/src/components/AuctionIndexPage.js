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
            <small>Posted {auction.created_at.toLocaleString()}</small>
          </div>
        );
      })}
    </div>
  );
};

export default AuctionIndexPage;
