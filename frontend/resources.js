const BEAT = -60
const CONTAINERHEIGHT = 600;

let allQFrets = [-2000];
let allWFrets = [-350, -390,-415,-455, -480, -975, -1010, -1035, -1075, -1100];
let allEFrets = [-510, -545, -570, -610, -635, -665, -700, -725, -765, -790, -1135, -1165, -1190, -1230, -1255, -1290, -1320, -1345, -1385, -1410];
let allRFrets = [-350, -390, -415, -455, -480, -510, -545, -570, -610, -635, -820, -855, -880, -920, -945, -975, -1010, -1035, -1075, -1100, -1135, -1165, -1190, -1230, -1255, -1445, -1475, -1500, -1540, -1565];
let allTFrets = [-665, -700, -725, -765, -790, -820, -855, -880, -920, -945, -1290, -1320, -1345, -1385, -1410, -1445, -1475, -1500, -1540, -1565];



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
      console.log(true)
      fretArr.shift()
      score.innerText = parseInt(score.innerText) + 200
    }else {
      console.log(false)
      score.innerText = parseInt(score.innerText) - 100
    }
  }
  }
