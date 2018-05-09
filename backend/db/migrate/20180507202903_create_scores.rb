class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.string :name
      t.integer :value
      t.integer :song_id
    end
  end
end
