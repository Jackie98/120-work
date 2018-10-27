//declare variables
let xPosArr = [ 30, 40, 190, 260, 472 ];
//set up canvas
function setup() {
    createCanvas( windowWidth, 800 );
}
//draw first array
let yPos = 0;
function draw() {
    background( 'rgb(121, 37, 200)' );

    stroke( 'rgb(51, 236, 188)' );
    fill( 'rgb( 100, 255, 0 )' );

    for( let idx = 0; idx < xPosArr.length; idx++ ) {
        // draw some boxes!
        rect( xPosArr[idx], yPos, 40, 40 );
    }

    yPos = (yPos + 5) % windowHeight;
//declare the assigned cuntions
drawCircle();
drawTriangle();
}
//draw the circle function
function drawCircle() {
    fill( 'rgb(230, 52, 32)' );
    noStroke();
    ellipse( 100, 100, 100 );
}
//draw the triangle function
function drawTriangle() {
    fill( 'rgb(17, 22, 205)' );
    noStroke();
    triangle(300, 100, 320, 100, 310, 80);
  }
