 var climber,climberImage;
 var door,doorImage;
 var ghostStanding,ghostStandingImage;
 var tower,towerImage;

function preload(){
 climberImage=loadImage("climber.png");  
 doorImage=loadImage("door.png");  
 ghostStandingImage=loadImage ("ghost-standing.png") 
 towerImage=loadImage("tower.png");
} 

function setup(){
 createCanvas(600,600); 
  tower=createSprite(300,300,20,50); 
  tower.addImage(towerImage);
  tower.velocityY = 3; 
  
   ghost=createSprite(300,300,20,50); 
  ghost.addImage(ghostStandingImage);
  ghost.scale=0.5
  
   


}

 function draw(){
 background(0);  
 if(tower.y > 600){
    tower.y = 300
 }
   obstacles();
   drawSprites(); 
 }
function obstacles(){
 if(frameCount % 150 === 0) {
   door=createSprite(Math.round(random(100,500)),-50);
   door.addImage(doorImage);
   door.velocityY= 3 
 }
  
  
  
  
  
  
}












