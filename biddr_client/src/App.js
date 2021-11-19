import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { User } from './requests';
import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';
import SignInPage from './components/SignInPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = () => {
    return User.current().then((user) => {
      if (user?.id) {
        setUser(user);
      }
    });
  };

  return (
    <BrowserRouter>
      <NavBar currentUser={user} />
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/auctions' component={AuctionIndexPage} />
        <Route path='/auctions/:id' component={AuctionShowPage} />
        <Route
          path='/sign_in'
          render={(routeProps) => (
            <SignInPage {...routeProps} onSignIn={getCurrentUser} />
          )}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
