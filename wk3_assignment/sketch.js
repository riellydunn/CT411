var x;

function setup(){
    createCanvas(800, 600);    
}

var value = 0;
function draw() {
  
//  shape2  
  fill(0);
  ellipse(132, 92, 95, 40);
  ellipse(262, 92, 95, 40); 
      
 
//  shape  
  fill(255);
  ellipse(135, 95, 90, 40);
  ellipse(260, 95, 90, 40);
  
 //  color  
  fill(30, 200, 100);
  noStroke();
  ellipse(145, 100, 30, 30);
  ellipse(250, 100, 30, 30);
    
    
    
//  pupil  
  fill(value);
  stroke(0);
  ellipse(145, 100, 15, 15);
  ellipse(250, 100, 15, 15);
 
  
}

function mousePressed() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}