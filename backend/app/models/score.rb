class Score < ApplicationRecord
  belongs_to :song
  validates :name, presence: true, length: { maximum: 20 }
end
