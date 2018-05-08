class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :fileName
  has_many :scores
end
