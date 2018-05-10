class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :filePath, :duration
  has_many :scores
end
