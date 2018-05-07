let q;
let w;
let e;
let r;
let t;

function setup() {
  createCanvas(400, 800);
  q = new Fret(400/6, 255, 0, 0);
  w = new Fret((400/6) * 2, 0, 0, 255);
  e = new Fret((400/6) * 3, 0, 255, 0);
  r = new Fret((400/6) * 4, 255, 128, 0);
  t = new Fret((400/6) * 5, 255, 0, 255);
}

function draw() {
  background(51);
  q.show();
  q.move(4);
  w.show();
  w.move(4);
  e.show();
  e.move(4);
  r.show();
  r.move(4);
  t.show();
  t.move(2);
}
