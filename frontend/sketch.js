function setupCanvas(q, w, e, r, t) {
  createCanvas(560, CONTAINERHEIGHT);
  qArr = createArray(q, 80, 255, 0, 0);
  wArr = createArray(w, 160, 0, 0, 255);
  eArr = createArray(e, 240, 0, 255, 0);
  rArr = createArray(r, 320, 255, 128, 0);
  tArr = createArray(t, 400, 255, 0, 255);
  qbox = new Input(80, 255, 0, 0)
  wbox = new Input(160, 0, 0, 255);
  ebox = new Input(240, 0, 255, 0);
  rbox = new Input(320, 255, 128, 0);
  tbox = new Input(400, 255, 0, 255);
}

function draw() {
  if(gameStart){
  background(51);
  qbox.show()
  wbox.show()
  ebox.show()
  rbox.show()
  tbox.show()
  let score = document.getElementById('score')
  let multiplier = document.getElementById('multiplier')
  let visual = document.getElementById('visual')
  showArr(qArr, 2)
  showArr(wArr, 2)
  showArr(eArr, 2)
  showArr(rArr, 2)
  showArr(tArr, 2)
  text("Q", 105, CONTAINERHEIGHT - 85)
  text("W", 185, CONTAINERHEIGHT - 85)
  text("E", 265, CONTAINERHEIGHT - 85)
  text("R", 345, CONTAINERHEIGHT - 85)
  text("T", 425, CONTAINERHEIGHT - 85)
  if(starter){
    starter = false
    let songPlaying = findById(SONGS, canvas.id)
    setTimeout(()=>{endGame()}, songPlaying.duration * 1000)
  }
}}

function endGame() {
  gameStart = false
  noLoop()
  let mainBody = document.getElementById('mainbody')
  let finalScore = document.createElement('h2')

  finalScore.innerText = score.innerText
  mainBody.innerHTML = ""

  // canvas.remove()

}
