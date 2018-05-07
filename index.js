document.addEventListener("DOMContentLoaded", ()=>{
  const score = document.getElementById('score')
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

  function AddScore(fretArr) {
    if(fretArr.length > 0){
      if(fretArr[0].onInputBox()){
        fretArr.shift()
        score.innerText = parseInt(score.innerText) + 200
      }else {
        score.innerText = parseInt(score.innerText) - 100
      }
    }
    }

  })
