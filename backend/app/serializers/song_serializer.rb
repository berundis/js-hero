class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :filePath, :previewPath, :duration, :imagePath
  has_many :scores
end
