
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(250,500,20,20)
	bob2=new Bob(325,500,20,20)
	bob3=new Bob(400,500,20,20)
	bob4=new Bob(475,500,20,20)
	bob5=new Bob(550,500,20,20)

	roof=new Ground(400,200,430,30)

	rope1=new Rope(bob1.body,{x:250,y:200})
	rope2=new Rope(bob2.body,{x:325,y:200})
	rope3=new Rope(bob3.body,{x:400,y:200})
	rope4=new Rope(bob4.body,{x:475,y:200})
	rope5=new Rope(bob5.body,{x:550,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()

  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-120,y:-200})
	}

}

