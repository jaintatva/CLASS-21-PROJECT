var canvas;
var music;

function preload(){
}


function setup(){
    canvas = createCanvas(740,600);

    rect1=createSprite(100,500,160,10)
    rect1.shapeColor="blue";
    rect1.debug=true

    rect2=createSprite(280,500,160,10)
    rect2.shapeColor="yellow";
    rect2.debug=true

    rect3=createSprite(460,500,160,10)
    rect3.shapeColor="pink";
    rect3.debug=true

    rect4=createSprite(640,500,160,10)
    rect4.shapeColor="green";
    rect4.debug=true

    ball=createSprite(640,100,30,30)
    ball.shapeColor="white";
    ball.debug=true
    ball.x = Math.round(random(50,700));
    ball.velocityX=4;
    ball.velocityY=6;

    line=createSprite(280,570,160,10)
    line.visible=false

    invisible1=createSprite(735,370,5,740)
    invisible2=createSprite(5,370,6,740)
    invisible3=createSprite(370,5,740,5)

    invisible1.visible=false
    invisible2.visible=false
    invisible3.visible=false

}

function draw() {
    background(rgb(169,169,169));

    createEdgeSprites();
  
    ball.bounceOff(rect1);
    ball.bounceOff(rect3);
    ball.bounceOff(rect4);

    ball.bounceOff(invisible1);
    ball.bounceOff(invisible2);
    ball.bounceOff(invisible3);
// ball and rect3
   if(ball.x-rect3.x<rect3.width/2+ball.width/2 &&
    rect3.x-ball.x< rect3.width/2+ball.width/2 &&
    ball.y-rect3.y<rect3.width/2+ball.width/2 &&
    rect3.y- ball.y< rect3.width/2+ball.width/2){
    ball.shapeColor="pink"
    rect3.shapeColor="pink"

   }
   else{
    rect3.shapeColor="pink"
   }
//ball and rect2
if(ball.x-line.x<line.width/2+ball.width/2 &&
    line.x-ball.x< line.width/2+ball.width/2 &&
   ball.y-line.y<line.width/2+ball.width/2 &&
   line.y- ball.y< line.width/2+ball.width/2){
    ball.velocityX=0;
    ball.velocityY=0;
    ball.shapeColor="yellow"
   }
   else{
    
   }

//ball and rect1

if(ball.x-rect1.x<rect1.width/2+ball.width/2 &&
    rect1.x-ball.x< rect1.width/2+ball.width/2 &&
   ball.y-rect1.y<rect1.width/2+ball.width/2 &&
   rect1.y- ball.y< rect1.width/2+ball.width/2){
    ball.shapeColor="blue"
    rect1.shapeColor="blue"
    
   }
   else{
    rect1.shapeColor="blue"
   }

//ball and rect4

if(ball.x-rect4.x<rect4.width/2+ball.width/2 &&
    rect4.x-ball.x< rect4.width/2+ball.width/2 &&
   ball.y-rect4.y<rect4.width/2+ball.width/2 &&
   rect4.y- ball.y< rect4.width/2+ball.width/2){
    ball.shapeColor="green"
    rect4.shapeColor="green"
    
   }
   else{
    rect4.shapeColor="green"
   }

     drawSprites();
} 
