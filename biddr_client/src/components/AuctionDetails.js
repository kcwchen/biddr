import React from 'react';

const AuctionDetails = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p></p>
      <p>Ends at: {props.ends_at.toLocaleString()}</p>
    </>
  );
};

export default AuctionDetails;
