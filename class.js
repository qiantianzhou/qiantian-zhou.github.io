let r1 = 1;
let left = ture;

function setup(){
	createCanvas(400,400);
	fill(255,0,0);
	noStroke();
	background(0);
}
function draw(){
	r1= mouseX;
	if (frameCount%200 == 0){
		left = !left
		// if(left){
		// 	r1+ +
		// }
		// else{
		// 	r1- -

		// }
	}
	// background(10);
	// console.log(r1);
	translate(width/2,height/2);
	rotate(frameCount * PI / 60);
	push();
	translate(60,60);
	rotate(frameCount * PI / 10);
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
	ellipse(-40,-20,10,10);
	ellipse(40,-20,10,10);
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
	pop();
}
function mousePressed(){

}