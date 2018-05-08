function setup() {
  createCanvas(560, CONTAINERHEIGHT);
  qArr = createArray(allQFrets1, 80, 255, 0, 0);
  wArr = createArray(allWFrets1, 160, 0, 0, 255);
  eArr = createArray(allEFrets1, 240, 0, 255, 0);
  rArr = createArray(allRFrets1, 320, 255, 128, 0);
  tArr = createArray(allTFrets1, 400, 255, 0, 255);

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
  showArr(qArr, 2)
  showArr(wArr, 2)
  showArr(eArr, 2)
  showArr(rArr, 2)
  showArr(tArr, 2)
}}
