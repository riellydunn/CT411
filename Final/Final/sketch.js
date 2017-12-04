var stars = []; // array of Jitter objects
var song;
var vader;
var leia;
var luke;
var trooper;
var red;
var red_lit;
var blue;
var blue_lit;

function preload(){
    
    song = loadSound("theme.mp3");
    vader = loadImage("vader.png");
    leia = loadImage("leia.png");
    luke = loadImage("luke.png");
    trooper = loadImage("trooper.png");
    red = loadImage("red.png");
    red_lit = loadImage("red_lit.png");
    blue = loadImage("blue.png");
    blue_lit = loadImage("blue_lit.png");
    
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0; i<500; i++) {
    stars.push(new Jitter());
  }
}

function draw(){
  background(27);
  for (var i=0; i<stars.length; i++) {
    stars[i].move();
    stars[i].display();
  }
    
//     imageMode(CENTER);
    image(vader, 800, 100, 300, 300);
    image(red, 700, 100, 300, 300);
    image(luke, 400, 100, 300, 300);
    image(blue, 500, 100, 300, 300);
    image(leia, 250, 100, 300, 300);
    image(trooper, 950, 100, 300, 300);
    image(red_lit, 700, 100, 300, 300);
    
//        light trail
//    fill(200, 50, 100);
//    ellipse(circX, 100, 150, 30);
//    if(circX > width || circX < 0){
//        speed = speed * -1;
//    }
//    circX = circX + speed;
//  
    
}


function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 10);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

    
function mousePressed(){
    song.play();
   
}
