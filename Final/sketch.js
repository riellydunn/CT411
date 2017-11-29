var vader;
var leia;
var luke;
var trooper;
var red;
var red_lit;
var blue;
var blue_lit;


var circX = 0;
var speed = 80;

function preload(){

    vader = loadImage("vader.png");
    leia = loadImage("leia.png");
    luke = loadImage("luke.png");
    trooper = loadImage("trooper.png");
    red = loadImage("red.png");
    red_lit = loadImage("red_lit.png");
    blue = loadImage("blue.png");
    blue_lit = loadImage("blue_lit.png");
}


//stars
function Ball(){
    this.x = random(0, width);
    this.y = random(0, height);
    this.speed = .1;
    this.speedY = .1;
    this.size = 5;
    this.drawBall = function(){
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.size, this.size);
    }
    this.bounce = function(){
        if(this.x > width || this.x < 0){
            this.speed = this.speed * -1;
        }
        if(this.y > height || this.y < 0){
       this.speedY = this.speedY * -1;
        }
    }
    this.moveBall = function(){
           this.x = this.x + this.speed;
            this.y = this.y + this.speedY; 
    }
}


var balls = [];
function setup(){
    createCanvas(windowWidth, windowHeight);
    for(var i=0; i<500; i++){
        balls[i] = new Ball();
    }
}

function draw(){
    background(27);
    for(var i=0; i<balls.length; i++){
        balls[i].drawBall();
        balls[i].moveBall();
        balls[i].bounce();
    }
    
    
//    light trail
    fill(200, 50, 100);
    ellipse(circX, 100, 150, 30);
    if(circX > width || circX < 0){
        speed = speed * -1;
    }
    circX = circX + speed;
    

//    images
    imageMode(CENTER);
    image(vader, 900, 300, 300, 300);
    image(red, 800, 300, 300, 300);
    image(luke, 500, 300, 300, 300);
    image(blue, 600, 300, 300, 300);
    image(leia, 350, 300, 300, 300);
    image(trooper, 1050, 300, 300, 300);
    image(red_lit, 800, 300, 300, 300);
    
}

