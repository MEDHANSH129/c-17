var rectangle;
var circle;
var thinrect;
var r;

function setup(){
  var canvas = createCanvas(400,400);
  }

  function draw(){
    background(0);
    rectangle =rect(100,250,50,100);
    thinrect =rect(120,150,5,100);
    circle =rect(100,150,50,50);
    r = rect(50,250,100,5);
    r = rect(100,250,100,5);
    

    if(keyDown(UP_ARROW)){
      rectangle.velocityX=0;
      rectangle.velocityY=0.5;

      /*thinrect.velocityX=0;
      thinrect.velocityY=0.5;

      circle.velocityX=0;
      circle.velocityY=0.5;

      r.velocityX=0;
      r.velocityY=0.5;*/
    }

     if(keyDown(DOWN_ARROW)){
      rectangle.velocityX=0;
      rectangle.velocityY=-0.5;

      /*thinrect.velocityX=0;
      thinrect.velocityY=-0.5;

      circle.velocityX=0;
      circle.velocityY=-0.5;

      r.velocityX=0;
      r.velocityY=-0.5;*/
    }

    if(keyDown(LEFT_ARROW)){
      rectangle.velocityX=-0.5;
      rectangle.velocityY=0;

      /*thinrect.velocityX=-0.5;
      thinrect.velocityY=0;

      circle.velocityX=-0.5;
      circle.velocityY=0;

      r.velocityX=-0.5;
      r.velocityY=0;*/
    }
    if(keyDown(RIGHT_ARROW)){
      rectangle.velocityX=0.5;
      rectangle.velocityY=0;

      /*thinrect.velocityX=0.5;
      thinrect.velocityY=0;

      circle.velocityX=0.5;
      circle.velocityY=0;

      r.velocityX=0.5;
      r.velocityY=0;*/
    }

  }

