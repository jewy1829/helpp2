
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinSprite;

var options=
{
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2,

}
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	dustbinSprite = new dustbin;

	dustbinSprite.x = 1000;
	dustbinSprite.y = 330;
	dustbinSprite.width = 10;
	dustbinSprite.height = 100;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  dustbinSprite.display();
 
}



