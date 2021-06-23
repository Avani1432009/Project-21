
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var ground1;
var ground2;

function preload(){
	
}

function setup() {
	createCanvas(800,700);

    engine = Engine.create();
    world = engine.world;

    var ball_options={
      isStatic:false,
      restitution:1,
      friction:0.2,
      density:1.2
 }
  
   var options ={
     isStatic: true
   };
  
	//Create the Bodies Here.
  ball = Bodies.circle(150,100,5,ball_options); 
  World.add(world,ball);
  fill("white");

  ground = Bodies.rectangle(400,380,800,15,options);
  World.add(world,ground);
  fill("white");

  ground1 = Bodies.rectangle(600,360,400,20,options);
  World.add(world,ground1);
  fill("white");

  ground2 = Bodies.rectangle(700,360,400,20,options);
  World.add(world,ground2);
  fill("white");

   rectMode(CENTER);


	Engine.run(engine);
  
}


function draw() {
  background("black");
  ellipse(ball.position.x,ball.position.y,15);

fill("white");
rect(ground.position.x,ground.position.y,800,10);
rect(ground1.position.x,ground1.position.y,10,50);
rect(ground2.position.x,ground2.position.y,10,50); 

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){

	//write code here to applyForce on ball body
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});
}

}

