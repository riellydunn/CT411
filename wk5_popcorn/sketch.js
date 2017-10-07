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
    background (255);
    imageMode(CENTER);
    image(img, width/2, height/2, 300, 300);
    
    stroke(209, 170, 5);
    fill(255, 245, 199);
    ellipse(650, circX, 50, 50);
    if(circX > 200 || circX < 0){
        speed = speed * -1;
    }
    circX = circX + speed;
    
}
