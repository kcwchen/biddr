import React, { useState, useEffect } from 'react';
import { Auction } from '../requests';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';

const AuctionShowPage = (props) => {
  const [auction, setAuction] = useState({});
  const [currentPrice, setCurrentPrice] = useState(1);

  useEffect(() => {
    Auction.show(props.match.params.id).then((auction) => {
      setAuction(auction);
      if (auction.bids[0]) {
        setCurrentPrice(parseInt(auction.bids[0].bid_price) + 1);
      }
    });
  }, []);

  return (
    <div className='container-fluid mt-3'>
      <AuctionDetails
        id={auction.id}
        title={auction.title}
        description={auction.description}
        ends_at={new Date(auction.ends_at)}
        reserve_price={auction.reserve_price}
        owner={auction.owner}
        created_at={new Date(auction.created_at)}
        current_price={currentPrice}
      />
      <BidList bids={auction.bids} />
    </div>
  );
};

export default AuctionShowPage;
