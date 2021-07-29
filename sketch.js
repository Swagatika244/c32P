const {
  Bodies,
  Engine,
  Body,
  World,
  setStatic} = Matter;
  
  var blower, ball, blowerMouth;
  var blow;
  var bob;
  var array;
  var ring;
  var rings=[];
  var cArray=[];
  var cRand;

  

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  cArray=['#02386e','#cd3700','#006888','#03a89e','#fc8d8e','#b80f0a'];
  blowerMouth = new Brect(400, 230, 130, 100);
  blower = new Brect(270, 267.7, 140, 25);
  groung = new Brect(width/2, height+10, width, 20);

  ball = new Ball(400, 100, 50);

  blow = createImg('R.png');
  blow.position(100, 75);
  blow.size(100,100);
  blow.mousePressed(Blow);

  for(var i=0; i<30; i++){
   var randX = random(10,width-10);
   var randY = random(10, height-10);
  ring=new Rings(randX, randY, 20);
  rings.push(ring);
  }
  


}

function draw() {
  Engine.update(engine);
  background('#c5eac7'); 

  for(ring of rings){
    ring.move();
    ring.display();
  }

  blowerMouth.show(0);
  blower.show(1);
  ball.display();

  drawSprites();
}
function Blow(){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});
  
}
function ringu(){
  cRand=random(cArray);
  return cRand;
}
