# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
song1 = Song.create(name: "A", artist: "2", fileName: "A")
song2 = Song.create(name: "B", artist: "3", fileName: "B")
song3 = Song.create(name: "C", artist: "4", fileName: "C")

Score.create(initials: "ABC", value: 10, song_id: 1)
Score.create(initials: "DEF", value: 15, song_id: 1)
Score.create(initials: "GHI", value: 15, song_id: 1)
Score.create(initials: "HIJ", value: 20, song_id: 1)
Score.create(initials: "JKL", value: 25, song_id: 1)
Score.create(initials: "LMN", value: 30, song_id: 1)
Score.create(initials: "ABC", value: 10, song_id: 2)
Score.create(initials: "DEF", value: 15, song_id: 2)
Score.create(initials: "GHI", value: 15, song_id: 2)
Score.create(initials: "HIJ", value: 20, song_id: 2)
Score.create(initials: "JKL", value: 25, song_id: 2)
Score.create(initials: "LMN", value: 30, song_id: 2)
