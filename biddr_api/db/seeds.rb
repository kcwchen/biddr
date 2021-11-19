# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bid.destroy_all
Auction.destroy_all

20.times do
  created_at = Faker::Date.backward(days: 50)

  a = Auction.create(
    title: Faker::Vehicle.make_and_model,
    description: Faker::Vehicle.standard_specs.join(', '),
    ends_at: Faker::Date.forward(days: 50),
    reserve_price: Faker::Commerce.price,
    created_at: created_at,
    updated_at: created_at
  )
end

auctions = Auction.all
puts auctions.count