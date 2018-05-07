let allQFrets = [0, -240];
let allWFrets = [0, -30, -90, -120];
let allEFrets = [-60, -180, -240];
let allRFrets = [-60, -180, -240];
let allTFrets = [-60, -180, -240];
const CONTAINERHEIGHT = 800

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

function setup() {
  createCanvas(560, CONTAINERHEIGHT);
  qArr = createArray(allQFrets, 80, 255, 0, 0);
  wArr = createArray(allWFrets, 160, 0, 0, 255);
  eArr = createArray(allEFrets, 240, 0, 255, 0);
  rArr = createArray(allRFrets, 320, 255, 128, 0);
  tArr = createArray(allTFrets, 400, 0,255, 0, 255);

  qbox = new Input(80, 255, 0, 0)
  wbox = new Input(160, 0, 0, 255);
  ebox = new Input(240, 0, 255, 0);
  rbox = new Input(320, 255, 128, 0);
  tbox = new Input(400, 255, 0, 255);

}

function draw() {
  background(51);
  qbox.show()
  wbox.show()
  ebox.show()
  rbox.show()
  tbox.show()
  showArr(qArr, 2)
  showArr(wArr, 2)
  showArr(eArr, 2)
  showArr(rArr, 2)
  showArr(tArr, 2)
}
