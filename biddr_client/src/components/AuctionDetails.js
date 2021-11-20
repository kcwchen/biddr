import React from 'react';
import BidForm from './BidForm';

const AuctionDetails = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p></p>
      <p>
        Ends at:{' '}
        {props.ends_at.toLocaleDateString('en-CA', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        })}
      </p>
      <BidForm />
    </>
  );
};

export default AuctionDetails;
