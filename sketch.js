const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground,upperGroud;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box16,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42;
var ball;
var slingShot;

function preload(){
  
}

function setup() {
    createCanvas(1500, 600);
    
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  //creation of level 1
  box1 = new Bluebox(810,389);
  box2 = new Redbox(831,389);
  box3 = new Yellowbox(851,389);
  box4 = new Pinkbox(871,389);
  box5 = new Greenbox(891,389);
  box6 = new Bluebox(911,389);
  box7 = new Redbox(931,389);
  box8 = new Yellowbox(951,389);
  box9 = new Pinkbox(971,389);
  box10 = new Greenbox(991,389);
  box11 = new Bluebox(1011,389);
  box12 = new Redbox(1031,389);

  //creation of level 2
  box13 = new Bluebox(831,359);
  box14 = new Redbox(851,359);
  box15 = new Yellowbox(871,359);
  box16 = new Pinkbox(891,359),
  box17 = new Greenbox(911,359);
  box18 = new Bluebox(931,359);
  box19 = new Redbox(951,359);
  box20 = new Yellowbox(971,359);
  box21 = new Pinkbox(991,359);
  box22 = new Greenbox(1011,359);

  //creation of level 3
  box23 = new Bluebox(851,329);
  box24 = new Redbox(871,329);
  box25 = new Yellowbox(891,329);
  box26 = new Pinkbox(911,329);
  box27 = new Greenbox(931,329);
  box28 = new Bluebox(951,329);
  box29 = new Redbox(971,329);
  box30 = new Yellowbox(991,329);

  //creation of level 4
  box31 = new Bluebox(871,299);
  box32 = new Redbox(891,299);
  box33 = new Yellowbox(911,299);
  box34 = new Pinkbox(931,299);
  box35 = new Greenbox(951,299);
  box36 = new Bluebox(971,299);

  //creation of level 5
  box37 = new Bluebox(891,269);
  box38 = new Redbox(911,269);
  box39 = new Yellowbox(931,269);
  box40 = new Pinkbox(951,269);
  
  //creation of level 6
  box41 = new Bluebox(911,239);
  box42 = new Redbox(931,239);

  ball = new Polygon(200,330,40);
  slingShot = new SlingShot(ball.body, {x:200 ,y:350});

  ground = new Ground(400,589,20000,20);
  upperGround = new Ground(920,400,300,20);
	
    Engine.run(engine); 
}


function draw(){
  Engine.update(engine);
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();

  box37.display();
  box38.display();
  box39.display();
  box40.display();

  box41.display();
  box42.display();

  ball.display();

  ground.display();
  upperGround.display();

  drawSprites();  
}

 function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
 }   
 
 function mouseReleased(){
   slingShot.fly();
 }

 function keyPressed(){
   if(keyCode === 32){
     slingShot.attach(ball.body);
   }
 }