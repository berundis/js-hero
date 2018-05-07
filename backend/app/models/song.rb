class Song < ApplicationRecord
  has_many :scores

  def return3Highest
    arr = self.scores.sort_by do |score|
      score.value
    end
    arr.reverse.slice(0..2)
  end
  
end
