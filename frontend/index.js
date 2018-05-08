document.addEventListener("DOMContentLoaded", ()=>{
  const score = document.getElementById('score')
  const button = document.getElementById('play-game')
  const body = document.getElementById('mainbody')

  button.addEventListener('click', (e)=>{
    e.target.remove()
    let instructions = document.createElement('h2')
    instructions.innerText = "Choose a song to play!"
    body.append(instructions)
    SongAdapter.getSongs()
      .then(resp => {
        resp.forEach((song)=>{
        songButton = document.createElement('button')
        songButton.setAttribute('id', `${song.id}`)
        songButton.innerText = `${song.name} by ${song.artist}`
        body.append(songButton)})
        body.addEventListener('click', (e)=>{
          if(e.target.tagName == "BUTTON"){
            body.innerHTML = " "
            setUpSong(e.target.id)
          }
        })
    })
  })

function setUpSong(id) {
  SongAdapter.getSong(id)
    .then(song => {
      let score = document.createElement('span')
      score.setAttribute('id', 'score')
      score.innerText = ' 0'
      let scoreCard = document.createElement('h2')
      scoreCard.innerText = 'Score:'
      scoreCard.append(score)
      body.append(scoreCard)
      gameStart = true
      let audio = new Audio('./audio/The White Stripes.mp3');
      audio.play()
    })
}
    // <h2>Score: <span id="score">0</span> </h2>
  // gameStart = true
  // e.target.remove()
  // //fetch(song)
  // let audio = new Audio() // song.file_path
  // audio.play()

  document.addEventListener("keyup",keyPush);
  function keyPush(evt) {
    switch(evt.keyCode) {
      case 81:
      AddScore(qArr)
      break;
      case 87:
      AddScore(wArr)
      break;
      case 69:
      AddScore(eArr)
      break;
      case 82:
      AddScore(rArr)
      break;
      case 84:
      AddScore(tArr)
      break;
    }
  }



  })
