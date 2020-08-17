
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18;
var block19,block20,block21,block22,block23,block24;
var block25,block26,block27,block28;
var block29,block30;
var polygon;
var slingshot1;

function setup() {
	createCanvas(800,700);

  
	engine = Engine.create();
	world = engine.world;

//createSprite(300, 170, 30, 30);

stand= new Stand(500,400,width/2,40);

block1=new Block(320,365,40,30,"blue");
block2=new Block(360,365,40,30,"blue");
block3=new Block(400,365,40,30,"blue");
block4=new Block(440,365,40,30,"blue");
block5=new Block(480,365,40,30,"blue");
block6=new Block(520,365,40,30,"blue");
block7=new Block(560,365,40,30,"blue");
block8=new Block(600,365,40,30,"blue");
block9=new Block(640,365,40,30,"blue");
block10=new Block(680,365,40,30,"blue");

block11=new Block(360,335,40,30,"pink");
block12=new Block(400,335,40,30,"pink");
block13=new Block(440,335,40,30,"pink");
block14=new Block(480,335,40,30,"pink");
block15=new Block(520,335,40,30,"pink");
block16=new Block(560,335,40,30,"pink");
block17=new Block(600,335,40,30,"pink");
block18=new Block(640,335,40,30,"pink");

block19=new Block(400,305,40,30,"yellow");
block20=new Block(440,305,40,30,"yellow");
block21=new Block(480,305,40,30,"yellow");
block22=new Block(520,305,40,30,"yellow");
block23=new Block(560,305,40,30,"yellow");
block24=new Block(600,305,40,30,"yellow");

block25=new Block(440,275,40,30,"green");
block26=new Block(480,275,40,30,"green");
block27=new Block(520,275,40,30,"green");
block28=new Block(560,275,40,30,"green");

block29=new Block(480,245,40,30,"red");
block30=new Block(520,245,40,30,"red");

var polygon_options={
  isStatic:false
 
}
polygon=Bodies.circle(200,300,20,polygon_options);
  World.add(world,polygon);

  slingshot1=new Slingshot(this.polygon,{x:100,y:300});

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);

  background(255,255,255);  
  drawSprites();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  ellipseMode(RADIUS);
    ellipse(polygon.position.x,polygon.position.y,20,20);
    fill("yellow")

    slingshot1.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode===32){
     slingshot1.attach(this.polygon); 
  }


}