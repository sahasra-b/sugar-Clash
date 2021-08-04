
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var llamma2;
var llammaImg;
var Mountains



function preload()
{
llammaImg=loadImage("llamma3.png")
MountainsImg=loadImage("Mountains.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	Mountains=createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
	Mountains.addImage (MountainsImg);
	Mountains.scale=2
	Mountains.velocityY = 2

	llamma2=createSprite(200, 200, 50, 50);
	llamma2.addImage (llammaImg)
    llamma2.scale=0.5;


	

	//Engine.run(engine);
  
}


function draw() {
 
  background(255);

  if (Mountains.y>displayHeight/2+400) {

	Mountains.y = displayHeight/2

  }


  if (keyDown ("space")){

llamma2.velocityY=-10;



  }

  llamma2.velocityY=  llamma2.velocityY + 0.8;


 drawSprites();
}






