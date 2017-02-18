var spot = {
  x:0,
  y:0
};
var col = {
  r:0,
  g:0,
  b:0
};
var c = 0;
var j = 1;
var cmpt = 0;
function setup(){
  createCanvas(350,200);
  //background
  background(0);
}
function draw (){
  col.r = random(0,255);
  col.g = random(0,255);
  col.b = random(0,255);

  spot.x = random(0, width);
  spot.y = random(0, height);

    noStroke();
    fill(col.r, col.g, col.b, c);
    ellipse( spot.x, spot.y, 10, 10);

    if (c > 255) {
      j = -1;
    }
    c = c + j;

}
