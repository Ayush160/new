var angle= 0;
function setup() {
  createCanvas(600, 600,WEBGL);
  frameRate(40);
}

function draw() {
  background(40);
  lights();
  fill(255);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  box(100);

  angle+=0.1;
}