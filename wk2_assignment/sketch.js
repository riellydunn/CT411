var x;

function setup(){
    createCanvas(800, 600);
//    x = width/2;
    
}

function draw(){
    background(0);
    stroke(255)
    fill(40, 50, 300);
    for(var i = 40; i<width; i+=200){
     for(var j = 40; j <= height; j+=100){
         ellipse(i, j, 50, 50);
         
         } 

    }
    
    
}