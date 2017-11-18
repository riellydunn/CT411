var names = ["Rie", "Whiskey & Rie", "RED", "Rie Bread", "Rie Toast", "Riles", "Rie Fry", "Rielly Cyrus", "Riachu", "Smiley Rielly", "&", "my personal favorite..", "How do you spell your name?"];
var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);
    fill(255);
    textSize(60);
    text("click to see my nick names!", 50, height/2);
}

function draw() {
//    nested loop
    noStroke();
    fill(198, 12, 12);
    for(var x = 5; x< width; x+=100){
        for(var y = 26; y < height; y+=180){
            ellipse(x, y, 30, 30);
        }
    }
}


function mousePressed(){
    background(12, 198, 184);
    fill(255);
    textSize(60);
    text(names[index], 50, height/2);
    index = index +1;
    
    if(index == names.length){
        index = 0;
    }
    
}