var bullet,wall,speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  speed =random(223,321)
  weight =random(30,52)
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  bullet=createSprite(50,200,50,50)
  bullet.velocityX=speed;
  

}

function draw() {
  background("white");
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2) {
  bullet.velocityX=0;
  var deform = weight*speed*speed/thickness*thickness*thickness
  if(deform<10){
  wall.shapeColor="green";
  }
  if(deform>10){
  wall.shapeColor="red";
  }

}
  drawSprites();
}