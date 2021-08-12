var box

function setup() {
  createCanvas(400, 400);  
  box = createSprite(200,200,20,20)
}

function draw() {
  background("red");
  if(keyIsDown(LEFT_ARROW)) {
    background(rgb(random(10,100,200),random(5,50,125),random(15,75,150)))
  }
  if(keyIsDown(UP_ARROW)) {
    background(rgb(random(10,100,200),random(5,50,125),random(15,75,150)))
  }
  if(keyIsDown(DOWN_ARROW)) {
    background(rgb(random(10,100,200),random(5,50,125),random(15,75,150)))
  }
  if(keyIsDown(RIGHT_ARROW)) {
    background(rgb(random(10,100,200),random(5,50,125),random(15,75,150)))
  }
  drawSprites();
}

