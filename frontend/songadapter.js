class SongAdapter{

  static getSongs(){
    return fetch('http://localhost:3000/api/v1/songs')
    .then(res => res.json())
  }

  static getSong(id){
    return fetch(`http://localhost:3000/api/v1/songs/${id}`)
    .then(res => res.json())
  }

}
