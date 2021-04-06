const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var drop;

function setup(){
     var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    if(this.drop.position.y > height)
    {
       Matter.Body.setPosition(this.drop, {x:random(0, 400), y:ramdom(0, 400)})
    }
}

function draw(){

    push();

    drop.display();
}   

function push(){

var maxDrops=100;

for(var i=0; i<this.maxDrops; i++)
{
  drops.push(new createDrop (ramdom(0, 400), ramdom(0, 400) ));
}
}