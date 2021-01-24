const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
// first lane
var box1,box2,box3,box4,box5,box6,box7;
// second lane
var box8,box9,box10,box11,box12;
// third lane
var box13,box14,box15;
// last box
var box16;

var polygon;

var gameState="onChain";

function preload(){



}

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,500,400,10);
    ground2 = new Ground(600,590,1500,10)

    // firt lane
    box1 = new Box(540,460,20,30);
    box2 = new Box(560,460,20,30);
    box3 = new Box(580,460,20,30);
    box4 = new Box(600,460,20,30);
    box5 = new Box(620,460,20,30);
    box6 = new Box(640,460,20,30);
    box7 = new Box(660,460,20,30);
    // second lane
    box8 = new Box(560,389,20,30);
    box9 = new Box(580,389,20,30);
    box10 = new Box(600,389,20,30);
    box11 = new Box(620,389,20,30);
    box12 = new Box(640,389,20,30);
    // third lane
    box13 = new Box(580,319,20,30);
    box14 = new Box(600,319,20,30);
    box15 = new Box(620,319,20,30);
    //last box
    box16 = new Box(600,248,20,30);

    polygon = new Polygon(280,350,20,20);

    chain = new Chain(polygon.body,{x:280,y:350})

}

function draw(){
background("black");
Engine.update(engine);

ground1.display();
ground2.display();
//lane one
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
//lane second
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
//lane third
box13.display();
box14.display();
box15.display();
//last box
box16.display();
chain.display();
polygon.display();


}

function mouseDragged(){

 
        Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
        


}
function mouseReleased(){
chain.fly();

gameSate="launched";
	
	}


