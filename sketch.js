const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;
var base1;
var base2;
var ground;
var bridge;
var jointPoint;
var rock1;

function setup() {
  createCanvas(900, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new base(450,600,900,20);
  base1 = new base(75,300,150,100);
  base2 = new base(825,300,150,100);
  bridge = new Bridge(6,{x:170, y:300})
  jointPoint = new base(700,300,1,1);
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);
 
  frameRate(80);
}

function draw() {
  background(51);
  Engine.update(engine);
  
  base1.show();
  base2.show();
  ground.show();
  bridge.show();

}
