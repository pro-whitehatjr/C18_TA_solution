var balls = []; 
var gravity = 0.1;

function setup() {
  createCanvas(480, 240);
  balls.push(new Ball(150,0,20));
}

function draw() {
  background(178, 217, 48);
  
  for(var x = 0; x < balls.length; x ++ ) { 
    balls[x].update();
    balls[x].display();
  }
}

function mousePressed() {
  var b = new Ball(mouseX,mouseY,20);
  balls.push(b);
}

