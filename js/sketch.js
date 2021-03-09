let r, c, w = 40;

function setup() {
    createCanvas(600, 600);
    noStroke()
    r = height / w;
    c = width / w;
    frameRate(1)
}

function draw() {
    background(255);
    fill(0)
    rect(parseInt(random(0, r)) * w, parseInt(random(0, c)) * w, w, w)

}