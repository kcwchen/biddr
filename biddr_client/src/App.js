import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';
import SignInPage from './components/SignInPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
