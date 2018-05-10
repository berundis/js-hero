class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :filePath, :duration, :imagePath
  has_many :scores
end
