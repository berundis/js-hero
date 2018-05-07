let w;
let e;
let r;
let t;
let allQFrets = [0, -60, -180, -240];

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
    if (fretArr[i].y > 800){
      fretArr.shift();
    }
  }
}

function setup() {
  createCanvas(560, 800);
  qArr = createArray(allQFrets, 80, 255, 0, 0)
  w = new Fret(160, 0,0, 0, 255);
  e = new Fret(240, 0,0, 255, 0);
  r = new Fret(320, 0,255, 128, 0);
  t = new Fret(400, 0,255, 0, 255);
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
  showArr(qArr, 5)
  // q.show();
  // q.move(2);

  w.show();
  w.move(2);
  e.show();
  e.move(2);
  r.show();
  r.move(2);
  t.show();
  t.move(2);

  // if (q[0].y > 700){
  //   q.pop();
  //
  // }
}
