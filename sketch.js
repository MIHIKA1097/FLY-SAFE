var backgroundImage,background;
var bird, birdImg;
var ground;

var obstaclesGroup,cloud,cloudImg;

function preload(){
birdImg = loadImage("bird.png");
backgroundImage = loadImage("background.jpg");
cloudImg =  loadImage("cloud.png")
}

function setup() {
  createCanvas(1000,800);
  
  background=createSprite(0,0,1000,600);
  background.addImage(backgroundImage);
  background.scale=3;
  background.x=backgr.width/2;
  background.velocityX=-4;
  
  bird =  createSprite(500,480,10,10);
  bird.addImage(birdImg);
  bird.scale = 0.3;
  
  obstaclesGroup = new Group()
}

function draw() {
  
  background(255);
  
    
  
  if(background.x<100){
    background.x=background.width/2;
  }
  
 
  

  
 
 
     spawnObstacles();
 
  
  if(keyDown("space")){
    bird.velocityY = -10
  }
  bird.velocityY = bird.velocityY +0.8
  
  drawSprites();
  
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,550,10,40);
    obstacle.velocityX = -3;
    obstacle.addImage(cloudImg);
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 1;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}





