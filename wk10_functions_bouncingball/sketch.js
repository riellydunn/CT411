var circX = 0;
var speed = 10;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(255, 10, 100);
    drawball();
    bounceball();
    moveball();
} 


function drawball(){
    ellipse(circX, 300, 100, 100);
    
}

function bounceball(){
    if(circX > width || circX < 0){
        speed = speed * -1;
    }
}
    
function moveball(){
    circX = circX + speed;
    
}
    
    
