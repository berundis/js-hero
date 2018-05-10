class Api::V1::SongsController < ApplicationController

  def index
    @songs = Song.all
    render json: @songs.to_json(only:[:id, :name, :artist, :filePath, :duration, :imagePath]), status: 200
  end

  def show
    @song = Song.find(params[:id])
    render json: @song, status: 200
  end

end
