// Make a ball bounce
function setup(){
createCanvas(600,600);
}

let posX = 300;
let posY = 300;
let speed = 1;
let Xspeed = 2;
let Yspeed = 2;

function draw(){
    background(255,0,0);
    ellipse(posX,posY,75,75);
    posX += Yspeed
    posY += Yspeed
    // posX++;
    // // //posY++;
    if (posX === width) {
       Xspeed = -Xspeed;   
    }
    else if(posX === 0){
        Xspeed = -Xspeed; 
    }
    if (posY === width) {
        Yspeed = -Yspeed; 
        
     }else if(posY === 0){
         Yspeed = -Yspeed
}

}