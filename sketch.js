const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1

var particles=[];
var plinko=[];
var division=[];

var divisionHeight = 300;


function setup() {
  engine = Engine.create();
    world = engine.world;

  createCanvas(800,800);

  ground1 = new Ground (400,780,800,20);

  for (var k = 0;k <=width ; k = k +80){
    division.push(new Division(k,height-divisionHeight/2, 10, divisionHeight));
  }

  for( var j = 40; j <=width; j=j+50 ){
    plinko.push(new Plinko(j,75));
  }

  for( var j = 15; j <=width-10; j=j+50 ){
    plinko.push(new Plinko(j,175));
  
  }

  for( var j = 40; j <=width; j=j+50 ){
    plinko.push(new Plinko(j,275));
  }

  for( var j = 15; j <=width-10; j=j+50 ){
    plinko.push(new Plinko(j,375));

  }

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-10,width/2-10),10,10) );
   }
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground1.display();

  for(var k = 0; k < division.length; k++){
    division[k].display();
  }

  for (var j = 0; j < plinko.length; j++){
    plinko[j].display();
  }

  for (var j = 0; j < paarticles.length; j++){
    particles[j].display();
  }
 
}