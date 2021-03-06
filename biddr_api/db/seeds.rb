# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bid.destroy_all
Auction.destroy_all

PASSWORD = '123'

super_user = User.create(
  first_name: "Admin",
  last_name: "User",
  email: "admin@user.com",
  password: PASSWORD,
  is_admin: true
)

5.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}@#{last_name.downcase}.com",
    password: PASSWORD
  )
end

users = User.all

20.times do
  created_at = Faker::Date.backward(days: 50)

  a = Auction.create(
    title: Faker::Vehicle.make_and_model,
    description: Faker::Vehicle.standard_specs.join(', '),
    ends_at: Faker::Date.forward(days: 50),
    reserve_price: Faker::Commerce.price,
    created_at: created_at,
    updated_at: created_at,
    state: 'published',
    user: users.sample
  )

  if a.valid?
    rand(1..20).times do
      b = Bid.create(
        bid_price: Faker::Commerce.price,
        auction: a,
        user: users.sample
      )

      if b.bid_price > a.reserve_price
        a.update(state: 'reserve met')
      end
    end
  end
end

auctions = Auction.all
bids = Bid.all
puts users.count
puts auctions.count
puts bids.count