import React, { Component } from 'react';
import NewAuctionForm from './NewAuctionForm';
import { Auction } from '../requests';

class AuctionNewPage extends Component {
  constructor(props) {
    super(props);
    this.createAuction = this.createAuction.bind(this);
  }

  createAuction(params) {
    Auction.create(params).then((auction) => {
      this.props.history.push(`/auctions/${auction.id}`);
    });
  }

  render() {
    return (
      <div className='container mt-3'>
        <h1 className='text-center'>Create an Auction</h1>
        <NewAuctionForm createAuction={this.createAuction} />
      </div>
    );
  }
}

export default AuctionNewPage;
