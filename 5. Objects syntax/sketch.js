var circle  = {
  x : 0,
  y : 100,
  diameter : 50,
};
 var colorCircle = {
   r : 250,
   g : 100,
   b : 100,
 };

 function setup(){
  createCanvas(350,200);
}
function draw (){
  //background
  background(250,250,100);
  //ellipse
  noStroke();
  fill(colorCircle.r, colorCircle.g, colorCircle.b);
  ellipse( circle.x, circle.y, circle.diameter, circle.diameter);

  circle.x++;
}
