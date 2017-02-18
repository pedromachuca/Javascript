var r,g,b,r1,b1,g1;

function setup(){
  createCanvas(350,200);
}

function draw (){

  // col = map(mouseX, 0, 350, 0, 255);
  // col1 = map(mouseX, 0, 350, 255, 0);
  //map(Ce qu'on veut maper , min range, max range, min new range, max new range);

  r = map(mouseX, 0, 350, 0, 255);
  g = map(mouseY, 0 , 350, 0 , 255);
  b = map(mouseY + mouseY, 0 , 350, 0 , 255);
  //background
  background(r,g,b);



  r1 = map(mouseX, 0, 350, 255, 0);
  g1 = map(mouseY, 0 , 350, 250, 0);
  b1 = map(mouseY + mouseY, 0 , 350, 255, 0);
  //ellipse
   noStroke();
  fill(r1, g1, b1);
  ellipse(mouseX, mouseY, 20, 20);
}
