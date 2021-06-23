var boy ,path ,leftbound , rightboundry  , pathimg, boyimg, i; 
function preload(){
 pathimg=loadImage("path.png");
 boyimg=loadAnimation ("Runner-1.pmg") 
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY = 4; path.scale=1.2;
  boy = createSprite(180,340,30,30); boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyimg);
  leftbound=createSprite(0,0,100,800); leftbound.visible = false;
  rightboundry=createSprite(410,0,100,800); rightboundry.visible = false;

  //create sprites here
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x = World.mouseX; edges= createEdgeSprites();
  boy.collide(edges[3]); boy.collide(leftbound); boy.collide(rightboundry);
  if(path.y > 400 ){ path.y = height/2; } drawSprites();

}
 