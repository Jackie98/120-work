function setup() {
    // create a canvas to draw on
    createCanvas( 600, 800 );
}

function draw() {

    // background
    background( 'rgb(147, 176, 254 )' );

    /* ***************************** */
    /* MAIN SANDBOX */
    /* ***************************** */
    push();

    // set the grid center( x:0, y:0 )
    // to canvas center
    translate( 300, 400 );


    /* ***************************** */
    /* ARMS */
    /* ***************************** */
    push();
    translate( 0, -55 );

   // left arm
   stroke( 'rgba(120, 0, 0, 1.0)' );
   strokeWeight( 100 );
   line( -120, 0, -200, -100 );
   line( -300, -100, -200, -200 );

   // hand
   stroke( 'rgb(214, 189, 67)' );
   strokeWeight( 50 );
   point( -200, -200 );

   // right arm
   rotate( PI );
   stroke( 'rgba(120, 0, 0, 1.0)' );
   strokeWeight( 60 );
   line( -140, 0, -200, -100 );
   line( -200, -100, -200, -200 );

   // hand
   stroke( 'rgb(214, 189, 67)' );
   strokeWeight( 75 );
   point( -200, -200 );

    pop(); // ARMS END

    /* ***************************** */
       /* BODY */
       /* ***************************** */
    push();
    fill( 'rgb(193, 120, 0)' );
    ellipse (0, 0, 350, 410);
    //button
    fill( 'rgb(254, 254, 254' );
    ellipse( 0, 0, 30 );

   pop(); // BODY END


   /* ***************************** */
   /* LEGS */
   /* ***************************** */
   push();
   translate( 0, 200 );

   // left leg
   fill( 'rgb(19, 29, 189)' );
   triangle( -130, 0, 0, 0, -150, 500 );
   // right leg
   scale( -1, 1 );
   triangle( -130, 0, 0, 0, -150, 500 );
   pop(); // LEGS END


   /* ***************************** */
      /* HEAD */
      /* ***************************** */
      push();
      translate( 0, -175 );

      fill( 'rgb(1, 156, 130)' );
      ellipse( 0, 0, 100, 200 );

      // mouth
      fill( 0 );
      arc(
          0,
          20,
          15,
          30,
          radians(100),
          radians(20),
          PIE
      );
      // nose
         ellipse( 0, 0, 10, 20 );

         // eyes
         // left
         push();
         translate( -60, -40 );

         fill(255);
         ellipse( 0, 0, 60, 35 );
         noFill();
         fill( '(rgb(0, 0, 0)' );
         ellipse( 0, 0, 30 );
         fill( 0 );
         ellipse( 0, 0, 20 );

         quad( 20, -20, 35, -35, -50, -50, 40, -40 );
   pop();

   // right
   push();
   translate( 60, -40 );

   fill(255);
   ellipse( 0, 0, 60, 35 );
   noFill();
   fill( 'rgb(0, 0, 0)' );
   ellipse( 0, 0, 30 );
   fill( 0 );
   ellipse( 0, 0, 20 );
   fill( 'rgb(119, 56, 25)' );
   quad( -20, -20, -35, -35, 50, -50, -40, -40 );
   pop();

   pop(); // HEAD END




   pop();
 }
