//How would you translate lines 2-4  to JSON?
var rectX = 100;
var rectY = 100;
var rectSize = 100;

//HINT: The variable below (line 7) can stay and be used as normal throughout the code (no need to translate this to JSON)
var colR;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    //How would you translate lines 12-16  to JSON (how do you pull the values from up top here)?
    var rectTop = rectY;
    var rectBottom = rectY + rectSize;
    var rectLeft = rectX;
    var rectRight = rectX + rectSize;
}

function draw(){
    background(200);
    
    //How would you translate the variables below to pull values out of JSON above (in lines 23-31)?
    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
        // HINT: Remember, you still have a "colR" variable up there so no need to translate that below (lines 25 and 27)
        colR = 0;   
    }else{
        colR = 255;   
    }
        fill(colR, 10, 100);
        // But the variables below do need some help/changing
        rect(rectX, rectY, rectSize, rectSize);
    
    
    
    
}