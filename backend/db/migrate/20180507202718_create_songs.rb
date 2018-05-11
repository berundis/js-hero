class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :artist
      t.string :filePath
      t.integer :duration
      t.string :imagePath
      t.string :previewPath
    end
  end
end
