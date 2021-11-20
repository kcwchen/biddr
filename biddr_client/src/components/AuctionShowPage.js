import React, { useState, useEffect } from 'react';
import { Auction } from '../requests';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';

const AuctionShowPage = (props) => {
  const [auction, setAuction] = useState({});

  useEffect(() => {
    Auction.show(props.match.params.id).then((auction) => {
      setAuction(auction);
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
      />
      <BidList bids={auction.bids} />
    </div>
  );
};

export default AuctionShowPage;
