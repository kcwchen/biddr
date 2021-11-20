import React from 'react';
import { Bid } from '../requests';

const BidForm = ({ aid }) => {
  const handleNewBid = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = {
      bid_price: formData.get('bid_price'),
    };
    Bid.create(params, aid).then((data) => {
      window.location.reload();
    });
  };
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
