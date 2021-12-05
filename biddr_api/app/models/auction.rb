class Auction < ApplicationRecord
  has_many :bids, dependent: :destroy
  belongs_to :user

  validates :title, presence: {message: "must be provided"}, length: {minimum: 5}
  validates :description, presence: {message: "must be provided"}
  validates :ends_at, presence: {message: "must be provided"}
  validates :reserve_price, numericality: {greater_than_or_equal_to: 1}
end
