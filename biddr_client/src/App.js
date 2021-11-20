import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { User } from './requests';
import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import AuctionNewPage from './components/AuctionNewPage';
import SignUpPage from './components/SignUpPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = () => {
    return User.current().then((user) => {
      console.log(!!user);
      if (user?.id) {
        setUser(user);
      }
    });
  };

  const onSignOut = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <NavBar currentUser={user} onSignOut={onSignOut} />
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route
          path='/sign_in'
          exact
          render={(routeProps) => (
            <SignInPage {...routeProps} onSignIn={getCurrentUser} />
          )}
        ></Route>
        <Route
          path='/sign_up'
          exact
          render={(routeProps) => (
            <SignUpPage {...routeProps} onSignUp={getCurrentUser} />
          )}
        />
        <Route exact path='/auctions' component={AuctionIndexPage} />
        <AuthRoute
          isAllowed={!!user}
          path='/auctions/new'
          component={AuctionNewPage}
        ></AuthRoute>
        <Route path='/auctions/:id' component={AuctionShowPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
