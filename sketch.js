const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron1, iron2, iron3, iron4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber =  new Rubber(200,200,50);
    stone =  new Stone(400,300,90,40);
    iron1  =  new Iron (200,400,30);
    iron2  =  new Iron (340,400,20);
    iron3  =  new Iron (450,400,30);
    iron4  =  new Iron (800,400,20);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();


    
 
}