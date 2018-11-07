//Create sketch by calling variables
var bubbles = []; // and array of Jitter objects
//set up sketch
function setup() {
  createCanvas(windowWidth, 800);
  // Create objects (bubbles)
  for (var i=2; i<50; i++) {
    bubbles.push(new Jitter());
  }
}
//design background and set up actions of the bubbles
function draw() {
  background('rgb(116, 164, 5)');
  for (var i=2; i<bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

// make the Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(40, 25);
  this.speed = 5;
//design the movement of the bubbles
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
//design the appearance of the bubbles
  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
