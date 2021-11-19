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
    <main>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <input type='submit' value='Sign In' />
      </form>
    </main>
  );
}

export default SignInPage;
