
var deltaX = 0;
let bgSound;

function preload() {
  bgSound = loadSound("./fairyFountain.mp3");
}


//set up canvas


function setup() {
  bgSound.loop();
  createCanvas(1100, 500);
}

function draw() {
   background('rgb(61, 215, 197)');
   //draw grass
   stroke(2);
   fill(0,255,0);
   rect(0,400, 1100, 300);
   //draw stems
  fill(0, 255, 0);
  stroke(9);

  fill(0,255,0);
  rect(80,400, 2, -100);

  stroke(9);
  fill(0,255,0);
  rect(640,400, 2, -100);

  stroke(9);
  fill(0,255,0);
  rect(960,400, 2, -100);

//make "petals"
//outer petals
fill('rgb(252, 15, 249)');
noStroke();
ellipse(82, 300, 50, -50);

fill('rgb(205, 97, 25)');
noStroke();
ellipse(642, 300, 50, -50);

fill('rgb(12, 99, 136)');
noStroke();
ellipse(962, 300, 50, -50);

//inner "petls"
fill('rgb(228, 107, 227)');
noStroke();
ellipse(82, 300, 30, -30);

fill('rgb(209, 129, 75)');
noStroke();
ellipse(642, 300, 30, -30);

fill('rgb(48, 145, 186)');
noStroke();
ellipse(962, 300, 30, -30);
  //draw flower centers
fill(0);
noStroke();
ellipse(82, 300, 10, -10);

fill(0);
noStroke();
ellipse(642, 300, 10, -10);

fill(75, 36, 33);
noStroke();
ellipse(962, 300, 10, -10);





//make sun
noStroke();
 fill('rgb(238, 231, 54)');
 ellipse(100, 100, 100, -100);

//make mountains
fill('rgb(82, 9, 153)')
  noStroke();
  triangle(100, 400, 500, 400, 300, 100);

  fill('rgb(110, 64, 196)')
  noStroke();
  triangle(300, 400, 500, 400, 400, 200);


  //translate cloud movement
  translate(deltaX, 0);
  deltaX++;

  // make cloud
  noStroke();
  	fill( 255 );
  	ellipse(100,100,150,50);
  	ellipse(75,125,150,50);
  	ellipse(200,125,150,50);
  	ellipse(150,135,150,50);


  if (deltaX + 85 > width){
    deltaX = -145;


}
}
