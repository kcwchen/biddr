class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.decimal :reserve_price
      t.datetime :ends_at

      t.timestamps
    end
  end
end
