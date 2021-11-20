import React from 'react';

const BidDetails = ({ bid_price, created_at }) => {
  return (
    <li className='list-group-item border-0'>
      <p>
        ${bid_price} on{' '}
        {created_at.toLocaleDateString('en-CA', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        })}
      </p>
    </li>
  );
};

export default BidDetails;
