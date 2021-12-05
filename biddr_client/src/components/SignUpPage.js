import React from 'react';
import { User } from '../requests';

const SignUpPage = (props) => {
  const { onSignUp } = props;

  const handleSubmit = (event) => {
    const { currentTarget } = event;
    event.preventDefault();
    const formData = new FormData(currentTarget);
    const params = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
    };
    User.create(params).then((user) => {
      if (user?.id) {
        onSignUp();
        props.history.push('/');
      }
    });
  };
  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='first_name' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            name='first_name'
            id='first_name'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='last_name' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            name='last_name'
            id='last_name'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password_confirmation' className='form-label'>
            Password Confirmation
          </label>
          <input
            type='password'
            name='password_confirmation'
            id='password_confirmation'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <input
            className='btn btn-outline-primary'
            type='submit'
            value='Sign Up'
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
