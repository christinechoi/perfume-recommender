class CreatePerfumes < ActiveRecord::Migration[5.0]
  def change
    create_table :perfumes, :id => false do |t|
      t.string :name
      t.string :brand
      t.string :pictureURL
      t.integer :likes
      t.integer :id, :limit => 4

      t.timestamps
    end
  end
end
