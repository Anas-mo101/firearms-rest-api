
export default `

const S = 620;
var x = 50 , speed = 50;
var y = Math.floor(Math.random() * S)
bulletSize = {w: 50, h: 10}

function setup() {
    let canvas = createCanvas(windowWidth-30, S).parent("lineCanvas");
    canvas.position(0, 0);
}

function draw() {
    background(255);
    fill(0,0,0);
    rectMode(CENTER)

    rect(x, y, bulletSize.w , bulletSize.h);

    if(speed < 0){
        ellipse(x - (bulletSize.w / 2), y, bulletSize.w , bulletSize.h);
    }else{
        ellipse(x + (bulletSize.w / 2), y, bulletSize.w , bulletSize.h);
    }

    x = x + speed;
    if(x + 25 >= width || x - 25 <= 0){
        speed = -speed;
        y = Math.floor(Math.random() * S)
        const sizeFactor = Math.floor(Math.random() * 100) + 50;
        bulletSize.w = sizeFactor;
        bulletSize.h = sizeFactor / 5;
    }

}

`;
