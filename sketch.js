const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var maxDrops = 100;
var drops = [];
var rand;
var thunderCreatedFrame = 0;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(424,678);

    engine = Engine.create();
    world = engine.world;


    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }

    
}

function draw(){
    background(0)
    Engine.update(engine);
    


    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
        
    }
}   

