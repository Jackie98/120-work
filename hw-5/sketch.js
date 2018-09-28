//*Raincloud + Line*//

//set variable parameters//
//set up canvas and line stroke, height
var a;
function setup() {
  createCanvas(windowWidth, 800)
  stroke( 'rgb(0, 0, 0)' )
  a = height/2;
}
function draw() {
  background(255);
///***SANDBOX***///
push();
//make the mouse follow the cloud
translate (mouseX, mouseY);
//delete cursor from page
noCursor();
//make cloud
noStroke();
	fill( 'rgb(209, 120, 210)' );
	ellipse(100,100,150,50);
	ellipse(75,125,150,50);
	ellipse(200,125,150,50);
	ellipse(150,135,150,50);


 pop(); //end cloud

//make line
line(0, a, width, a);
a = a - 0.5;
if (a < 0) {
  a = height;
  
pop(); //end line
  }

}
