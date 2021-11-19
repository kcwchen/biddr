import React from 'react';
import BidDetails from './BidDetails';

const BidList = ({ bids }) => {
  return (
    <div>
      <h3>Previous Bids</h3>
      <ul>
        {bids
          ? bids.map((bid) => {
              return (
                <BidDetails
                  key={bid.id}
                  bid_price={bid.bid_price}
                  created_at={new Date(bid.created_at)}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default BidList;
