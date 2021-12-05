class AddStateToAuction < ActiveRecord::Migration[6.1]
  def change
    add_column :auctions, :state, :string, default: "draft"
  end
end
