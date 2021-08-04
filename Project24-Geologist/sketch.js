
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	plane=new Plane(600,height,1200,20);
	hammer=new Hammer(600,300);
	rubber=new Rubber(700,400,70);
	stone=new Stone(700,320,100,100);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  hammer.display();
  rubber.display();
  stone.display();
  plane.display();
 
}



