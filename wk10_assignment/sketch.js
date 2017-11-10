var img;
var circX = 0;
var circY = 0;
var speed = 3;


function preload(){
    img = loadImage("popcorn.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
};

function draw() {
    background (64, 168, 148);
    drawball();
    bounceball();
    moveball();


    imageMode(CENTER);
    image(img, width/2, height/2, 400, 400);
}
   
function drawball(){
    noStroke();
    fill(255);
    ellipse(600, circX, 30, 35);
    ellipse(500, circX, 45, 40);
    ellipse(560, circX, 35, 32);
    noStroke();
    fill(203, 183, 51);
    ellipse(600, circX, 20, 20);
    ellipse(500, circX, 20, 20);
    ellipse(560, circX, 13, 13);
}
    
function bounceball(){
    if(circX > 200 || circX < 0){
        speed = speed * -1;
    }
}
    
function moveball(){
    circX = circX + speed;
}

