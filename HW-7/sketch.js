

let ball = {};
ball.width = 65;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
   frameRate (20);
}
// declare an initialize global variables
let boolState = false;
let fillColor;


function draw() {
  createCanvas(windowWidth, 400);
  let red = floor( random(256) );
 let green = floor( random(256) );
 let blue = floor( random(256) );
 background( red, green, blue );
  // set the fill color for an ellipse
     if( boolState ) {
         // switch bool variable state
         boolState = false;
         // set fill color
         fillColor = 'red';
     } else {
         // switch bool variable state
         boolState = true;
         // set fill color
         fillColor = 'blue';
     }
     fill( fillColor );
     ellipse( width/2, height/2, 80 );
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
