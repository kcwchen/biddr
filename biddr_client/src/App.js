import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/auctions' component={AuctionIndexPage} />
        <Route path='/auctions/:id' component={AuctionShowPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
