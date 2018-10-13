let rows, x_space;
let cols, y_space;
//setup canvas
function setup() {
	createCanvas( windowWidth, windowHeight );
	frameRate( 10 );

	x_space = 100;
	rows = floor( width / x_space );
	y_space = 100;
	cols = floor( height / y_space );
}


//draw the animated ellipses
function draw() {
	background( 'rgb(235, 158, 7)' );

	noStroke();

	// Initialize ‘x’ to a dummy value.
	let x = 1;
	let y = 1;
	while ( x != 0 ){
		x = floor(random() * rows);
		y = floor(random() * cols);

		fill( random(100,175), random(100,175), random(100,175) );
		ellipse( x*x_space, y*y_space, random(35, 80) );
	}
}
