var circX;
var circY;
var circDiameter = 400;
var circRadius = circDiameter/2;
var d;
var redCol = 94;
var yelCol = 249;
var sedgwickFont;

function preload(){
    sedgwickFont = loadFont("SedgwickAveDisplay-Regular.ttf");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    circX = 400;
    circY = 300;
    textFont(sedgwickFont);
    textSize(20);
}

function draw(){
    background(94, 166, 252);
    noStroke();
    fill(yelCol, 245, 95);
    ellipse(circX, circY, circDiameter, circDiameter);
    d = dist(circX, circY, mouseX, mouseY);
//    white circles
       fill(255);
    ellipse(350, 250, 50, 50);
        fill(255);
    ellipse(450, 250, 50, 50);
//    blue circles
    fill(94, 166, 252)
    ellipse(350, 250, 28, 28);
    ellipse(450, 250, 28, 28);
//    black circle      
    fill(0);
    ellipse(350, 250, 15, 15);
        fill(0);
    ellipse(450, 250, 15, 15);
//    text
    fill(255, 0, 0);
    text("Don't make me sick", mouseX, mouseY, 200, 800);


}


function mousePressed(){
     if(d < circRadius){
        yelCol = 249;
    }else{
        yelCol = 10;
    }
    
    
    
}