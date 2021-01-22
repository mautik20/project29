const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    
    ground=new Ground(405.5,380,148,10);
    stone=new Stone(100,300,20,20);
    //base one
  block1=new Block(445.5,360,20,30);
  block2=new Block(465.5,360,20,30);
  block3=new Block(345.5,360,20,30);
  block4=new Block(365.5,360,20,30);
  block5=new Block(385.5,360,20,30);
  block6=new Block(405.5,360,20,30);
  block7=new Block(425.5,360,20,30);

  //base two
  block8=new Block(365.5,330,20,30);
  block9=new Block(385.5,330,20,30);
  block10=new Block(405.5,330,20,30);
  block11=new Block(425.5,330,20,30);
  block12=new Block(445.5,330,20,30);
  //base three
  block13=new Block(385.5,300,20,30);
  block14=new Block(405.5,300,20,30);
  block15=new Block(425.5,300,20,30);
  //base four
  block16=new Block(405.5,270,20,30);


}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    stone.display();
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
 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


