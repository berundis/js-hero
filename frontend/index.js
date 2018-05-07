document.addEventListener("DOMContentLoaded", ()=>{
  const score = document.getElementById('score')
  const button = document.getElementById('play-game')

  button.addEventListener('click', (e)=>{
    gameStart = true
    e.target.remove()
    //fetch(song)
    let audio = new Audio('./audio/The White Stripes.mp3') // song.file_path
    audio.play()
  })

  document.addEventListener("keyup",keyPush);
  function keyPush(evt) {
    switch(evt.keyCode) {
      case 81:
      AddScore(qArr)
      console.log('q');
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
