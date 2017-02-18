var textField;
var textarea;
var button;

function setup() {
  noCanvas();

  textField = select('#textarea');
  //textField = createInput('Enter a number');
  //textField.changed(newText);
  //textField.input(newTyping);
  output = select('#output');
  button  = select('#button');
  button.mousePressed(newText);
}
/*function newTyping() {

  //textField.html(textField.value());
  //createP(usrText.value());
  output.html(textField.value());
}*/
function newText() {

  //textarea.html(textField.value());
  createP(textField.value());
//console.log(input.value());
}
