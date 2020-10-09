const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, box1, box2, box3, box4, box5, box6;

var Ball1;

var Rope;
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(390, 800, 3000, 30);
  //Row:1

  box1 = new Box(700, 700, 90, 90);
  box2 = new Box(700, 700, 90, 90);
  box3 = new Box(700, 700, 90, 90);
  box4 = new Box(700, 700, 90, 90);
  box5 = new Box(700, 700, 90, 90);
  box6 = new Box(700, 700, 90, 90);
  //Row:2

  box7 = new Box(800, 700, 90, 90);
  box8 = new Box(800, 700, 90, 90);
  box9 = new Box(800, 700, 90, 90);
  box10 = new Box(800, 700, 90, 90);
  box11 = new Box(800, 700, 90, 90);
  box12 = new Box(800, 700, 90, 90);

  box13 = new Box(900, 700, 90, 90);
  box14 = new Box(900, 700, 90, 90);
  box15 = new Box(900, 700, 90, 90);
  box16 = new Box(900, 700, 90, 90);
  box17 = new Box(900, 700, 90, 90);

  ball1 = new ball(400, 400, 80, 80);

  Rope = new rope(ball1.body, { x: 400, y: 100 });


}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  //Row:1
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  //Row:2
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();

  ball1.display();
  Rope.display();

}

function mouseDragged() {

Matter.Body.setPosition(ball1.body,{x: mouseX,y:mouseY});

}
