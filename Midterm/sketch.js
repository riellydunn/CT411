var img1 = {
    loc: 0,
    size: 300,
    x: 100,
    y: 150,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
var img2 = {
    loc: 0,
    size: 300,
    x: 450,
    y: 150,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
var img3 = {
    loc: 0,
    size: 300,
    x: 800,
    y: 150,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var drizzle;
var col = 255;

function preload(){
    img1.loc = loadImage("drizzle.png");
    img2.loc = loadImage("rain.png");
    img3.loc = loadImage("thunder.png");
    drizzle = loadSound("Rain.mp3");
    rain = loadSound("Rain_Inside_House.mp3");
    thunder = loadSound("thunder_strike.mp3");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    

}

function draw(){
    background(col);
    image(img1.loc, img1.x, img1.y, img1.size, img1.size);
    image(img2.loc, img2.x, img2.y, img2.size, img2.size);
    image(img3.loc, img3.x, img3.y, img3.size, img3.size);
}

function mousePressed(){
    img1.top = img1.y;
    img1.left = img1.x;
    img1.right = img1.x + img1.size;
    img1.bottom = img1.y + img1.size;
    
    if (mouseX > img1.left && mouseX < img1.right && mouseY > img1.top && mouseY < img1.bottom){
        col = 0;
         drizzle.play();
    }
    
    img2.top = img2.y;
    img2.left = img2.x;
    img2.right = img2.x + img2.size;
    img2.bottom = img2.y + img2.size;
    
    if (mouseX > img2.left && mouseX < img2.right && mouseY > img2.top && mouseY < img2.bottom){
        col = 0;
         rain.play();
    }
    img3.top = img3.y;
    img3.left = img3.x;
    img3.right = img3.x + img3.size;
    img3.bottom = img3.y + img3.size;
    
    if (mouseX > img3.left && mouseX < img3.right && mouseY > img3.top && mouseY < img3.bottom){
        col = 0;
         thunder.play();
    }


}