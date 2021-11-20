import React from 'react';
import BidForm from './BidForm';
import { Auction } from '../requests';

const AuctionDetails = (props) => {
  const handlePublish = (e) => {
    e.preventDefault();
    Auction.update({ state: 'published' }, props.id).then((data) => {
      window.location.reload();
    });
  };
  return (
    <>
      <h1 className='card-title'>{props.title}</h1>
      <p className='card-text'>{props.description}</p>
      <p>Current Price: ${props.current_price}</p>
      <p>
        Ends at:{' '}
        {props.ends_at.toLocaleDateString('en-CA', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        })}
      </p>
      {props.currentUser &&
      props.currentUser?.id === props.owner?.id &&
      props.state === 'draft' ? (
        <div className='mb-3'>
          <button onClick={handlePublish} className='btn btn-outline-primary'>
            Publish
          </button>
        </div>
      ) : null}
      <BidForm aid={props.id} />
    </>
  );
};

export default AuctionDetails;
