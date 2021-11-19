class Auction < ApplicationRecord
  has_many :bids, dependent: :destroy
  belongs_to :user

  validates :title, presence: true, length: {minimum: 1}
  validates :reserve_price, numericality: {greater_than_or_equal_to: 0}
end
