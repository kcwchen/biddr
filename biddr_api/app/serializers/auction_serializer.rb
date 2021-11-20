class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :ends_at,
    :reserve_price,
    :created_at,
    :updated_at
  )

  has_many :bids do
    object.bids.order(bid_price: :desc)
  end
  class BidSerializer < ActiveModel::Serializer
    attributes(
      :id,
      :bid_price,
      :created_at,
      :updated_at,
      :bidder_full_name
    )
    def bidder_full_name
      object.user&.full_name
    end
  end

  belongs_to :user, key: :owner
  class UserSerializer < ActiveModel::Serializer
    attributes(
      :id,
      :first_name,
      :last_name,
      :email,
      :full_name
    )
  end
end
