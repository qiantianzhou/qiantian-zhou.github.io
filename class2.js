let r1 = 2;


function setup(){
	createCanvas(1000,720);
	fill(255,0,0);
	noStroke();
	background(0);
}
function draw(){
	r1 = mouseY;
	translate(width/2,height/2);
	rotate(frameCount * PI / 100);
	ellipse(r1,0,10,10);
	push();
	translate(60,60);
	rotate(frameCount * PI / 100);
	ellipse(0,0,10,10);
	pop();


}