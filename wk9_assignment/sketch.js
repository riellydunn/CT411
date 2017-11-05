var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var counter = 0;
var speed = 6;

function preload(){
    img = loadImage("Turkey.png");
    img3 = loadImage("potato.png");
    img4 = loadImage("bread.png");
    img5 = loadImage("stuffing.png");
    img6 = loadImage("pie.png");
}

function setup(){
    createCanvas(1000, 1000);

    
}

function draw(){
    background(255);
    
    push();
    
        translate(width/2, height/2);
        imageMode(CENTER);
        image(img, 0, 0, 500, 440);

      
                    push();
                        translate(300, 300);
                        scale(.5);
                        rotate(radians(counter));
                        fill(255);
                        imageMode(CENTER);
                        image(img3, 0, 0, 200, 200);
                    pop();
    
                    push();
                        translate(-300, -200);
                        rotate(radians(counter));
                        imageMode(CENTER);
                        image(img4, 0, 0, 100, 100);
                    pop();
    
                    push();
                        translate(-300, 300);
                        rotate(radians(counter));
                        imageMode(CENTER);
                        image(img5, 0, 0, 100, 100);
                    pop();   
                    
                    push();
                        translate(300, -200);
                        rotate(radians(counter));
                        imageMode(CENTER);
                        image(img6, 0, 0, 100, 100);
                    pop();
    

    pop();
    counter+= speed;
    
}