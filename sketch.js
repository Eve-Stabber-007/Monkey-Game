var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(50,375,20,50);
  monkey.addAnimation("running", monkey_running);
  
  monkey.scale = 0.11;
  
  ground = createSprite(200,380,400,20);
  ground.x = ground.width /2;
  
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
  survivalTime = 0;

}


function draw() {
background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);

  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
     
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas() {
  if (frameCount % 100 === 0) {
    var banana = createSprite(400,317,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.11;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1
    
     FoodGroup.add(banana);
  
  }
}
  
  function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,350,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   obstacle.scale = 0.11;
   
  obstacle.lifetime = 100;
      
   obstacle.collide(ground);
   
   obstaclesGroup.add(obstacle);
  
 }
}






