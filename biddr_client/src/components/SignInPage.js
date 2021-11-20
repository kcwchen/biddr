import React, { useState } from 'react';
import { Session } from '../requests';

function SignInPage(props) {
  const { onSignIn } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const params = {
      email: email,
      password: password,
    };
    Session.create(params).then((data) => {
      if (data.id) {
        onSignIn();
        props.history.push('/');
      }
    });
  }

  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='form-control'
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='form-control'
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <input
          className='btn btn-outline-primary'
          type='submit'
          value='Sign In'
        />
      </form>
    </div>
  );
}

export default SignInPage;
