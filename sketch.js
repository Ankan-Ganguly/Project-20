var cat, catImg1, catImg2, catImg3;
var mouse,mouseImg1, mouseImg2, mouseImg3;
var garden, gardenImg;
function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat3.png", "images/cat2.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    cat= createSprite(870, 600,30,30);
    cat.addAnimation("catSitting1", catImg1);
    cat.addAnimation("catWalking", catImg2);
    cat.addAnimation("catSitting2", catImg3);
    cat.scale = 0.2;

    mouse= createSprite(200,600,30,30);
    mouse.addAnimation("cheeseMouse", mouseImg1);
    mouse.addAnimation("mouseDancing", mouseImg2);
    mouse.addAnimation("mouseCaught", mouseImg3);
    mouse.scale = 0.2;
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.changeAnimation("catSitting2", catImg3);
        cat.x = 300
        cat.scale = 0.2;
        cat.velocityX = 0;
        mouse.changeAnimation("mouseCaught", mouseImg3);
        mouse.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    
    if (keyDown(LEFT_ARROW)){
       cat.changeAnimation("catWalking", catImg2);
       cat.scale= 0.2;
       cat.velocityX = -4;
       mouse.changeAnimation("mouseDancing", catImg2);
       mouse.scale= 0.2;
    }
}
