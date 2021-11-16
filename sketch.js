var dinossaur;
var dino_running;
var dino_touching;
var earth_ground;
var ground;
var invisibleGround;
var cloud_Image;
var  nuvemzinha;
var grupo_nuvens;
var grupo_obstacles;
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;

function preload() {
dino_running = loadAnimation("trex1.png","trex3.png","trex4.png");
earth_ground = loadImage("ground2.png");
dino_touching = loadImage("trex_collided.png");
cloud_Image = loadImage("cloud.png");
obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
obstacle5 = loadImage("obstacle5.png");
obstacle6 = loadImage("obstacle6.png");
}

  function setup() {
  createCanvas(600,200);
  dinossaur =  createSprite(50,180,20,50);
  dinossaur.addAnimation("running",dino_running);
  dinossaur.scale = 0.4;
  dinossaur.x = 50;
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",earth_ground);
  ground.x = ground.width /2                  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  grupo_nuvens = createGroup();
  grupo_obstacles = createGroup();

}
  function draw() {
  background ("grey");
  console.log(dinossaur.y);
  drawSprites();
  ground.velocityX = -2;
  if (ground.x<0) {
  ground.x = ground.width /2    
  }
  if (keyDown("space") && dinossaur.y>=150) {
  dinossaur.velocityY = -10;

}
dinossaur.velocityY = dinossaur.velocityY +0.8      //gravidade sobre o dinossauro
createCloud();
dinossaur.collide(invisibleGround);
}
function createCloud() {
if (frameCount%60 === 0) {
nuvemzinha = createSprite(600,100);
nuvemzinha.addImage(cloud_Image);  
nuvemzinha.velocityX = -3;
nuvemzinha.scale = 0.5;
nuvemzinha.y = Math.round(random(30,90))
nuvemzinha.depth = dinossaur.depth;   
dinossaur.depth = dinossaur.depth +1;
grupo_nuvens.add(nuvemzinha);
}
}


