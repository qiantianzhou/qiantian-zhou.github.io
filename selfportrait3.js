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
//	rotate(frameCount*PI/60);
	fill(255,200,160);
	ellipse(0,0,200,230);
	fill(143, 122, 83);
	ellipse(-40,-20,40,30);
	ellipse(40,-20,40,30)
	fill(255);
	ellipse(-40,-20,20,20);
	ellipse(40,-20,20,20);
	fill(240, 205, 103);
	beginShape();
	vertex(0,0);
	vertex(-20,20)
	vertex(20,20);
	endShape(close);
	fill(212, 177, 74);
	ellipse(0,20,40,15);
	fill(0,0,0);
	push();
	translate(-40,0);
//    ellipse(0,-20,10,10);
	ellipse(map(mouseX, 0, width,-5,5),-20,10,10);
	pop();
	push();
	translate(40,0);
//    ellipse(0,-20,10,10);
	ellipse(map(mouseX, 0, width,-5,5),-20,10,10);
	pop();
	fill(168, 104, 50);
	beginShape();
	vertex(-20,50);
	vertex(20,50);
	vertex(20,80);
	vertex(-20,80);
	endShape(close);
	fill(0,0,0);
	beginShape();
	vertex(-15,55);
	vertex(15,55);
	vertex(15,75);
	vertex(-15,75);
	endShape(close);
	fill(156, 14, 14);
	beginShape();
	vertex(-10,65);
	vertex(10,65);
	vertex(10,75);
	vertex(-10,75);
	endShape(close);
	






}