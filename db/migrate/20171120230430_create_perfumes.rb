class CreatePerfumes < ActiveRecord::Migration[5.0]
  def change
    create_table :perfumes do |t|
      t.string :name
      t.string :brand
      t.string :url

      t.timestamps
    end
  end
end
