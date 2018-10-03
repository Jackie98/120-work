///Define global variables
var rad = (20); //radius of the circle
var xpos, ypos //position of the shape
var xspeed = (3.5); //speed of the circle
var yspeed = (3.3); //speed of the circle
var xdirection = 1 //set circle's pattern of direction
var ydirection = 1
function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    noStroke();
    ellipseMode(RADIUS);
  // Set the starting position of the circle
  xpos = width / 2;
  ypos = height / 2;
}
//set up variable
let numerator = 0

function draw() {
  //set background colors
    let red = floor( random(256) );
    let green = floor( random(256) );
    let blue = floor( random(256) );
    background( red, green, blue );
    frameRate(30);
    if(frameCount%60 > 30 ) {
      rect(width/2, height/2, 100, 100);
      textSize(24);

   // calculate the result
   let result = numerator % 9;

   // display the equation and result
   text( numerator + " % 9 = " + result, 10, 60 );

   // increment the numerator
   numerator = numerator + 1;
    }
    //draw both ellipses on the line
    eSize = 10;
    x1 = mouseX;
    y1 = height * round(0.25);
    x2 = sqrt(x1);
    y2 = height * 0.25;

    var x1 = map(mouseX, 0, width, 20, 100);
      ellipse(x1, 25, 25, 25);
      //This ellipse is constrained to the 0-100 range
      //after setting withinBounds to true

    // Draw the non-squared
    line(0, y1, width, y1);
    ellipse(x1, y1, eSize, eSize);

    // Draw the squared
    line(0, y2, width, y2);
    ellipse(x2, y2, eSize, eSize);

    // Draw dividing line
    stroke(150);
    line(0, height/2, width, height/2);
    //update the shape's position
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;
    //correct the circle's movement if it exceeds the screen
    if (xpos > width - rad || xpos < rad) {
      xdirection*= -1;
    }
    if (ypos > height - rad || ypos < rad) {
      ydirection*= -1;
    }
    //draw the circle
    ellipse(xpos, ypos, rad, rad);


} //end algorithm
