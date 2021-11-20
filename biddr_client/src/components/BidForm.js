import React from 'react';

const BidForm = () => {
  const handleNewBid = () => {};
  return (
    <form onSubmit={handleNewBid} className='d-flex'>
      <input
        className='form-control me-2 w-25'
        step='0.01'
        type='number'
        name='bid_price'
        id='bid_price'
      />
      <input type='submit' value='Bid' className='btn btn-outline-primary' />
    </form>
  );
};

export default BidForm;
