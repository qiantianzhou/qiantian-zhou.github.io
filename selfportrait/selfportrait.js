let img;

function setup(){

	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display',"block");
	cnv.parent('content');
	img = loadImage('background.jpg');
}

function draw() {
	noStroke();
	image(img,0,0,width,height);
	translate(width/2, height/2);
	fill(255,200,160);
	ellipse(0,0,250,280);
	fill(0,0,255);
	ellipse(-40,-20,40,30);
	ellipse(40,-20,40,30)
	fill(255);
	ellipse(-40,-20,20,20);
	ellipse(40,-20,20,20);
}