class Score < ApplicationRecord
  belongs_to :song
  validates :name, presence: true
end
