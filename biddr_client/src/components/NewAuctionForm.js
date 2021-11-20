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
    props.createAuction(params);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>
          Title
        </label>
        <input type='text' name='title' id='title' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          type='text'
          name='description'
          id='description'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='ends_at' className='form-label'>
          End Date
        </label>
        <input
          type='date'
          name='ends_at'
          id='ends_at'
          min={`${new Date()}`}
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='reserve_price' className='form-label'>
          Reserve Price
        </label>
        <input
          type='number'
          step='0.01'
          name='reserve_price'
          id='reserve_price'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <input className='btn btn-outline-primary' type='submit' value='Save' />
      </div>
    </form>
  );
}
