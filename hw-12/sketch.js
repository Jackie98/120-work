//declare variables
let balls = [];
const numOfBalls = 45;
//set up canvas
function setup() {
    createCanvas(windowWidth, 800);

    // new ball class object
    let init_x = 5;
    let init_y = 5;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));
        // move the starting position over
        init_x += 100;
        if (init_x > width) {
            init_x = 50;
            init_y += 120;
        }
    }
}
//design canvas background, etc
function draw() {
    background('rgb(233, 177, 177)');

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
    }
}






///Ball Class///
class Ball {
    constructor(x, y, size) {
        this.color = 'rgb(39, 204, 212)';
        this.size = random(30, 150);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-10, 10);
        this.deltaY = random(-10, 10);
    }

    display() {
        push();
        stroke(0);
        // set the balls fill color
        fill(this.color);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }
//designate movement
    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // check if the ball has hit a vertical, left or right wall
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = 'rgb(222, 216, 42)';
        }
        // check if the ball has hit a horizontal, top of bottom wall
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = 'rgb(222, 216, 42)';
        }
    }


    ballCheck(otherBalls, myId) {
        // for loop touches each of the balls in the array
        for (let n = 0; n < otherBalls.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and should be skipped
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                    // flip the color
                    if( this.color == 'rgb(222, 216, 42)') {
                        this.color = 'rgb(231, 16, 213)';
                    } else {
                        this.color = 'rgb(222, 216, 42)';
                    }
                }
            }
        }
    }
}
//end of object interaction
