import React from 'react';

export default function NewAuctionForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      title: formData.get('title'),
      description: formData.get('description'),
      ends_at: formData.get('ends_at'),
      reserve_price: formData.get('reserve_price'),
    };
    console.log(params);
    props.createAuction(params);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <br />
        <input type='text' name='title' id='title' />
        <br />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <br />
        <input type='text' name='description' id='description' />
        <br />
      </div>
      <div>
        <label htmlFor='ends_at'>Ends At</label>
        <br />
        <input type='date' name='ends_at' id='ends_at' />
        <br />
      </div>
      <div>
        <label htmlFor='reserve_price'>Reserve Price</label>
        <br />
        <input
          type='number'
          step='0.01'
          name='reserve_price'
          id='reserve_price'
        />
        <br />
      </div>
      <div>
        <input type='submit' value='Submit' />
      </div>
    </form>
  );
}
