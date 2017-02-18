var x = false;
var  r, g, b, button;

function setup() {
    createCanvas(350, 200);
    //background
    background(250, 250, 100);
    // r = select('#r');
    // g = select('#g');
    // b = select('#b');
    // button.mousePressed(changeColor);
}

function draw() {

    //rectangles
    // fill(200, 250, 200);
    // rect(mouseX + 15, mouseY + 15, 50, 50);

    //Si l'utilisateur click on dessine
    if (x == true) {
      //ellispe
      noStroke();
      fill(250, 200, 200, 150);
      ellipse(mouseX, mouseY, 20, 20);
    }
  //on remet x a zero pour ne pas dessiner tt le temps
  x = false
}
function mousePressed() {
  x = true;
}
// function changeColor() {
//   console.log();
//
// }
