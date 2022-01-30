let ground;
var lander
var lander_img
var bg_img;

var vx=0
var g=0.05
var vy=5


var spaceship
function preload()
{
 lander_img=loadImage("normal.png")
 bg_img=loadImage("bg_sur.png")
 lander_img=loadImage("lander.jpg")
 moon_img=loadImage("moon.jpg")
 spaceship_img=loadImage("spaceship.jpg")
}

function setup() {
  createCanvas(1250,700);
  
  lander=createSprite(300,300,200,300)
  lander.addImage(lander_img)
  lander.scale=0.5
 
  rectMode(CENTER)
  textSize(15)

  ground=createSprite(100,689,2000,9)
  ground.shapeColor="black"

  
  spaceship=createSprite(900,200,200,300)
  spaceship.addImage(spaceship_img)
  spaceship.scale=0.9



}

function draw() 
{
  background(51);
  image(bg_img,0,0)

  push()
  fill(255)
text("Vertical Velocity:"+round(vy),800,100)
pop()
  //fall down    
  vy+=g
  lander.position.y+=vy

  if (keyDown("UP_ARROW")){
lander.y=lander.y-9
  }
  
  drawSprites();
}
function keyPressed(){
  if (keyCode==UP_ARROW){
    upward_thrust()
    lander.changeAnimation('thrusting')
 
  }
}
function upward_thrust(){
  vy=-1;
}

