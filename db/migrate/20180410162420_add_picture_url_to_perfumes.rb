class AddPictureUrlToPerfumes < ActiveRecord::Migration[5.0]
  def change
    add_column :perfumes, :pictureURL, :string
  end
end
