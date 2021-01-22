var cat,mouse,garden;
var catImage1,catImage2;
var mouseImage1,mouseImage2,mouseImage3,gardenImage;
function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage3= loadAnimation("images/cat4.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(500,300);
garden.addImage(gardenImage);


cat = createSprite(700,550);
cat.addAnimation("catSitting" ,catImage1);
cat.scale = 0.1;

mouse = createSprite(100,550);
mouse.addAnimation("mouseStanding", mouseImage1);
mouse.scale = 0.1;


    
}


function draw() {
    
      
    background("white");

   
    //Write condition here to evalute if tom and jerry collide
 if(cat.x - mouse.x < (cat.width - mouse.width)/2){
cat.addAnimation("catLastImage",catImage3);
cat.changeAnimation("catLastImage");
cat.velocityX = 0;

mouse.addAnimation("mouseLastImage",mouseImage3);
mouse.changeAnimation("mouseLastImage");
 }

    
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
 if(keyCode ===  LEFT_ARROW){
 cat.velocityX = -5;
 cat.addAnimation("catRunning",catImage2);
 cat.changeAnimation("catRunning");

 mouse.addAnimation("mouseJumping",mouseImage2);
 mouse.changeAnimation("mouseJumping");
 }

}
