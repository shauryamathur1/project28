
var ground;
var paper,dustbin1,dustbin2,dustbin3;// parts of the dusbin .
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var	dimg;
var rope1;
function  preload()
{
	dimg=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,300); // paper is the image of garbage and 200,300 is the position

	rope1= new Launcher(paper.body,{x:200,y:200})

	dustbin1 = new Dustbin(500,320,20,100);
	dustbin2 = new Dustbin(600,370,220,20);
	dustbin3 = new Dustbin(700,320,20,100);
	
	ground = new Ground(400,390,1200,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


	ground.display();
	image(dimg,500,260,200,100);
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	paper.display();
    rope1.display();
  drawSprites();
 
}




function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.cut();
}
