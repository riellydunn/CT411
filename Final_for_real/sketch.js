var stars = []; // array of Jitter objects
var song;
var sound;
var imperial;
var vader;
var leia = {
    loc: 0,
    size: 300,
    x: 250,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
    
};
var luke;
var trooper = {
    
    loc:0,
    size:300,
    x: 950,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
    
};
var saber = {
   
    loc:0,
    size: 200,
    x: 700,
    y: 150,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    
};

var value = 0;
var red_lit;
var bluesaber = {
   
    loc:0,
    size: 300,
    x: 500,
    y: 100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    
};
var blue_lit;
var buttonClicked = true;

function preload(){
    
    imperial = loadSound("imperial.mp3");
    song = loadSound("theme.mp3");
    vader = loadImage("vader.png");
    leia.loc = loadImage("leia.png");
    luke = loadImage("luke.png");
    trooper.loc = loadImage("trooper.png");
    saber.loc = loadImage("red.png");
    red_lit = loadImage("red_lit.png");
    bluesaber.loc = loadImage("blue.png");
    blue_lit = loadImage("blue_lit.png");
    sound = loadSound("light_saber.mp3");
    
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0; i<200; i++) {
    stars.push(new Jitter());
  }
    
   for (var i=0; i<500; i++) {
    stars.push(new Jitter2());
  }
}

function draw(){
  background(35);
  for (var i=0; i<stars.length; i++) {
    stars[i].move();
    stars[i].display();
  }
    
//     imageMode(CENTER);
    
    if(buttonClicked){
       image(saber.loc, 700, 100, 300, 300);
     } else {
      image(red_lit, 700, 100, 300, 300);
    }
    
    if(buttonClicked){
        image(bluesaber.loc, 500, 100, 300, 300);
    } else {
        image(blue_lit, 500, 100, 300, 300);
    }
    
    image(leia.loc, leia.x, leia.y, leia.size, leia.size);
    image(trooper.loc, trooper.x, trooper.y, trooper.size, trooper.size);
    image(luke, 400, 100, 300, 300);
    image(vader, 800, 100, 300, 300);
 
    
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
    noStroke();
    fill(random(255), 255, random(255));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function Jitter2() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(1, 5);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

    
function mousePressed(){
//    song.play();
    
//    red
    saber.left = saber.x;
    saber.top = saber.y;
    saber.right = saber.x + saber.size;
    saber.bottom = saber.y + saber.size;
    
    
     if (mouseX > saber.left && mouseX < saber.right && mouseY > saber.top && mouseY < saber.bottom && buttonClicked==false){
         sound.play();
         buttonClicked = !buttonClicked;
    } else if (mouseX > saber.left && mouseX < saber.right && mouseY > saber.top && mouseY < saber.bottom && buttonClicked==true){
        buttonClicked = !buttonClicked;  
    }
    
//    blue
    bluesaber.left = bluesaber.x;
    bluesaber.top = bluesaber.y;
    bluesaber.right = bluesaber.x + bluesaber.size;
    bluesaber.bottom = bluesaber.y + bluesaber.size;
    
    
     if (mouseX > bluesaber.left && mouseX < bluesaber.right && mouseY > bluesaber.top && mouseY < bluesaber.bottom && buttonClicked==false){
         sound.play();
         buttonClicked = !buttonClicked;
    } else if (mouseX > bluesaber.left && mouseX < bluesaber.right && mouseY > bluesaber.top && mouseY < bluesaber.bottom && buttonClicked==true){
        buttonClicked = !buttonClicked;  
    }
    
//    leia
    leia.top = leia.y;
    leia.left = leia.x;
    leia.right = leia.x + leia.size;
    leia.bottom = leia.y + leia.size;
    
    if (mouseX > leia.left && mouseX < leia.right && mouseY > leia.top && mouseY < leia.bottom){
         song.play();
    }
    
    
//    trooper
    trooper.top = trooper.y;
    trooper.left = trooper.x;
    trooper.right = trooper.x + trooper.size;
    trooper.bottom = trooper.y + trooper.size;
    
    if (mouseX > trooper.left && mouseX < trooper.right && mouseY > trooper.top && mouseY < trooper.bottom){
         imperial.play();
    }
}
