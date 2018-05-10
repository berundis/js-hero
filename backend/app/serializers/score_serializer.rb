class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :value
  belongs_to :song
end
