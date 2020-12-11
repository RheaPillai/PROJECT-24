const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var backgroundIMG

function preload(){
    backgroundIMG=loadImage("IMAGES/bg.png")
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,650,70,70);
    box2 = new Box(1200,650,70,70);
    box3 = new Box(1000,550,70,70);
    box4= new Box(1200,550,70,70);
    box5 = new Box(1100,400,70,70)

    ground = new Ground(width/2,height,1500,30)

    bird=new Bird(100,100)

    pig1 = new Pig(1100,670)
    pig2 = new Pig(1100,550)

    log1 = new Log(1100,600,275,PI/2)
    log2= new Log(1100,470,275,PI/2)
    log3= new Log(1060,450,150,PI/8)
    log4= new Log(1150,450,150,-PI/8)

}

function draw(){
    background(backgroundIMG);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    ground.display();

    bird.display();

   
  

   
  
   
}