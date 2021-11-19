class Api::V1::AuctionsController < Api::ApplicationController
  before_action :find_auction, except: [:index, :create]

  def index
    auctions = Auction.order(created_at: :desc)
    render(json: auctions)
  end

  def show
    if @auction
      render(json: @auction)
    else
      render(json: {error: "Auction not found"})
    end
  end

  private

  def find_auction
    @auction = Auction.find params[:id]
  end
end
