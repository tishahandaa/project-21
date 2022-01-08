var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var right
var left
var ball
var engine
var world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = Engine.world;
	
	ground = new Ground(200,390,800,20)
	// =new Ground(200,390,800,20);
	//right = new Ground(390,200,20,400);
	//left = new Ground(10,200,20,400);

  
	//Create the Bodies Here.

var ball_options ={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball = Bodies.circle(50,600,20,ball_options)
World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,20)
 ground.show()
 left.show()
 right.show()
}



