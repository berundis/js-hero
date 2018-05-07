document.addEventListener("DOMContentLoaded", ()=>{
  const score = document.getElementById('score')
  const button = document.getElementById('play-game')

  button.addEventListener('click', ()=>{
    gameStart = true
  })

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
