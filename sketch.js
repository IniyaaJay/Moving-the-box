var dog;
function setup() {
  createCanvas(250,250);
  dog=createSprite(125, 125, 25, 25)
}

function draw() 
{
  background("blue");
  if(keyIsDown(RIGHT_ARROW)){
dog.position.x+=3   
  }
  if(keyIsDown(LEFT_ARROW)){
    dog.position.x-=3
  }
  if(keyIsDown(UP_ARROW)){
    dog.position.y-=3
  }
  if(keyIsDown(DOWN_ARROW)){
    dog.position.y+=3
  }
drawSprites()
}




