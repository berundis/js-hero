class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :initials, :value
  belongs_to :song
end
