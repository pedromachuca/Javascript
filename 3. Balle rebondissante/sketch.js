var x = 200;
var speed = 3;

function setup() {
    createCanvas(380, 300);
}

function draw() {
  background(90,160,51);
    //rectangles
    stroke(0,0,255);
    strokeWeight(2);
    fill(0,0,200);
    rect(370, 130, 8, 40);
    rect(0, 130, 8, 40);

    //balle
    fill(255,255,255);
    stroke(255,255,255);
    ellipse(x, 150, 15, 15);
    x = x + speed;
     if (x > 360) {
         speed = -3;
     }
     else if (x < 17) {
       speed = 3;
     }

}
