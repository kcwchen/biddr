import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/auctions' component={AuctionIndexPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
