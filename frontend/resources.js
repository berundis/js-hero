const BEAT = -60
let allQFrets = [0, -240];
let allWFrets = [0, -30, -90, -120];
let allEFrets = [-60, -180, -240];
let allRFrets = [-60, -180, -240];
let allTFrets = [-60, -180, -240];
const CONTAINERHEIGHT = window.innerHeight - 60;
let gameStart = false

function createArray(allFrets, x, red, green, blue){
  let arr = []
  for (var i = 0; i < allFrets.length; i++) {
    arr[i] = new Fret(x, allFrets[i], red, green, blue)
  }
  return arr
}

function showArr(fretArr, speed){
  for(let i = 0; i < fretArr.length; i++){
    fretArr[i].show()
    fretArr[i].move(speed)
    if (fretArr[i].y > CONTAINERHEIGHT){
      fretArr.shift();
    }
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
