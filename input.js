function Input(x, red, green, blue) {
  this.x = x;
  this.y = CONTAINERHEIGHT - 100;
  this.width = 10;
  this.red = red;
  this.green = green;
  this.blue = blue;

  this.show = function() {
    stroke(this.red, this.green, this.blue);
    fill(51)
    rect(this.x, this.y, this.width*6, this.width*2)
  }
}
