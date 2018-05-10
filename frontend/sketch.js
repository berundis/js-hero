mainPageSetup()

function setupCanvas(q, w, e, r, t) {
  createCanvas(560, CONTAINERHEIGHT);
  rectMode(CENTER)
  qArr = createArray(q, 90, 51, 204, 51);
  wArr = createArray(w, 180, 255, 51, 51);
  eArr = createArray(e, 270, 255, 255, 51);
  rArr = createArray(r, 360, 51, 102, 255);
  tArr = createArray(t, 450, 255, 153, 51);
  qbox = new Input(90, 51, 204, 51)
  wbox = new Input(180, 255, 51, 51);
  ebox = new Input(270, 255, 255, 51);
  rbox = new Input(360, 51, 102, 255);
  tbox = new Input(450, 255, 153, 51);
}

let qPressed = false
let wPressed = false
let ePressed = false
let rPressed = false
let tPressed = false

function draw() {
  if(gameStart){
    background(51);
    qbox.show()
    wbox.show()
    ebox.show()
    rbox.show()
    tbox.show()
    if (qPressed){qbox.pressed()}
    if (wPressed){wbox.pressed()}
    if (ePressed){ebox.pressed()}
    if (rPressed){rbox.pressed()}
    if (tPressed){tbox.pressed()}
    let score = document.getElementById('score')
    let multiplier = document.getElementById('multiplier')
    let visual = document.getElementById('visual')
    showArr(qArr, 2)
    showArr(wArr, 2)
    showArr(eArr, 2)
    showArr(rArr, 2)
    showArr(tArr, 2)
    fill(255)
    text("Q", 85, CONTAINERHEIGHT - 95)
    text("W", 175, CONTAINERHEIGHT - 95)
    text("E", 265, CONTAINERHEIGHT - 95)
    text("R", 355, CONTAINERHEIGHT - 95)
    text("T", 445, CONTAINERHEIGHT - 95)
    if(starter){
      starter = false
      let songPlaying = findById(SONGS, canvas.id)
      setTimeout(()=>{endGame()}, 1000 * 1000)
    }
  }
}

function keyPressed() {

  switch(key) {
    case 'Q':
    qPressed = true
    break;
    case 'W':
    wPressed = true
    break;
    case 'E':
    ePressed = true
    break;
    case 'R':
    rPressed = true
    break;
    case 'T':
    tPressed = true
    break;
  }
}

function keyReleased() {

  switch(key) {
    case 'Q':
    qPressed = false
    break;
    case 'W':
    wPressed = false
    break;
    case 'E':
    ePressed = false
    break;
    case 'R':
    rPressed = false
    break;
    case 'T':
    tPressed = false
    break;
  }
}

// function setUpLines() {
//   stroke(255);
//   line(450, CONTAINERHEIGHT - 500, 500, CONTAINERHEIGHT - 100);
//   stroke(255);
//   line(90, CONTAINERHEIGHT - 500, 40, CONTAINERHEIGHT - 100);
//
// }

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
    if (fretArr[i].y > CONTAINERHEIGHT-75){
      fretArr.shift();
      score.innerText = parseInt(score.innerText) - 100
      multiplier.innerText = '1'
      visual.innerText = '.'
    }
  }
}

function AddScore(fretArr) {
  if(fretArr.length > 0){
    if(fretArr[0].onInputBox() || fretArr[1].onInputBox()){

      if(fretArr[1].onInputBox()){
        fretArr.slice(1)

      }
      fretArr.shift()

      score.innerText = parseInt(score.innerText) + (100 * parseInt(multiplier.innerText))
      visual.innerText += '.'
      if(visual.innerText == '............'){
        multiplier.innerText = parseInt(multiplier.innerText) + 1
        visual.innerText = '.'
      }

    }else {

      score.innerText = parseInt(score.innerText) - 100
      visual.innerText = '.'
      multiplier.innerText = '1'
    }
  }
}
