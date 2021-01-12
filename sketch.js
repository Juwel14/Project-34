const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() 
{
  bgimage = loadImage("GamingBackground.png");
}

function setup() 
{
  createCanvas(1366, 625);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(300, 470, 1000, 20);
  hero = new Hero(250, 250, 300, 150);
  fly = new Fly(hero.body, {x: 250, y: 250});
  monster = new Monster(900, 250, 50, 50);

  b1 = new Block(450, 280, 50, 50);
  b2 = new Block(450, 280, 50, 50);
  b3 = new Block(450, 280, 50, 50);
  b4 = new Block(450, 280, 50, 50);
  b5 = new Block(450, 280, 50, 50);
  b6 = new Block(450, 280, 50, 50);
  b7 = new Block(450, 280, 50, 50);
  b8 = new Block(530, 260, 50, 50);
  b9 = new Block(530, 250, 50, 50);
  b10 = new Block(530, 250, 50, 50);
  b11 = new Block(530, 250, 50, 50);
  b12 = new Block(530, 250, 50, 50);
  b13 = new Block(530, 250, 50, 50);
  b14 = new Block(610, 280, 50, 50);
  b15 = new Block(610, 280, 50, 50);
  b16 = new Block(610, 280, 50, 50);
  b17 = new Block(610, 280, 50, 50);
  b18 = new Block(610, 280, 50, 50);
  b19 = new Block(610, 280, 50, 50);
  b20 = new Block(610, 280, 50, 50);
  b21 = new Block(610, 280, 50, 50);
  b22 = new Block(690, 250, 50, 50);
  b23 = new Block(690, 250, 50, 50);
  b24 = new Block(690, 250, 50, 50);
  b25 = new Block(690, 250, 50, 50);
  b26 = new Block(690, 250, 50, 50);
}

function draw() 
{
  background(bgimage);

  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();
  monster.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();

}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}