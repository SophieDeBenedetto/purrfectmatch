class AddColumnStateToShelters < ActiveRecord::Migration
  def change
    add_column :shelters, :state, :string
  end
end
