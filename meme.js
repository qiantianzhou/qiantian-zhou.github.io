let img;

function setup(){

	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display',"block");
	cnv.parent('content');
	img = loadImage('meme.jpg');
}

function draw() {
//	background(119,119,119);
	noStroke();
	image(img,0,0,width,height);
    
    push();
    translate(1025,260);
    fill(255,255,255);
    ellipse(0,0,100,80);
    pop();
    
    push();
    translate(1200,310);
    fill(255,255,255);
    ellipse(0,0,100,80);
    






}