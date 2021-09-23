const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;


var snowfall1
var snow1
var snow2
var snow3
var snow4
var snow5

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  snowfall1= new snowfall(200,200,20,20)
}

function draw() {
  background(snow3);
  drawSprites();
  Engine.update(engine);
  snowfall1.display()
}

function preload() {
  snow3 = loadImage("snow3.jpg")

}