class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :state,
    :created_at
  )

  belongs_to :user, key: :owner
  class UserSerializer < ActiveModel::Serializer
    attributes(
      :id,
    )
  end
end
