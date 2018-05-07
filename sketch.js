let q;
let w;
let e;
let r;
let t;

function setup() {
  createCanvas(560, 800);
  q = new Fret(80, 255, 0, 0);
  w = new Fret(160, 0, 0, 255);
  e = new Fret(240, 0, 255, 0);
  r = new Fret(320, 255, 128, 0);
  t = new Fret(400, 255, 0, 255);
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
  q.show();
  q.move(.5);
  w.show();
  w.move(1);
  e.show();
  e.move(1);
  r.show();
  r.move(1);
  t.show();
  t.move(1);
}
