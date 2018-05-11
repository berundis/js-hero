function Fret(x, y, red, green, blue) {
  this.x = x;
  this.y = y;
  this.width = 10;
  this.length = 20
  this.red = red;
  this.green = green;
  this.blue = blue;

  this.show = function() {
    fill(this.red, this.green, this.blue);
    rect(this.x, this.y, this.width*6, this.length)
    noStroke()
  }

  this.move = function(arg) {
    this.y = this.y + arg;
  }

  this.onInputBox = function(){
    return this.y > CONTAINERHEIGHT - 125 && this.y < CONTAINERHEIGHT - 50
  }
}
