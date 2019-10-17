let img;


function setup(){

	var cnv = createCanvas(1200, 670);
	cnv.style('display',"block");
	cnv.parent('content');
	img = loadImage('meme.jpg');
}

function draw() {


    
	noStroke();
	image(img,0,0,1200,670);
    
    push();
    translate(762,179);
    fill(255,255,255);
    ellipse(0,0,100,80);
    fill(0,0,0);
    ellipse(map(mouseX, 0, width,-10,10),0,30,30);
    pop();
    
    push();
    translate(900,217);
    fill(255,255,255);
    ellipse(0,0,100,80);
    fill(0,0,0);
    ellipse(map(mouseX, 0, width,-10,10),0,30,30);
    pop();
    
    push();
    
    translate(width/2,height/2);
    rotate(frameCount*PI/120);

    translate(200,60);

    
    
    fill(255,0,0);
    ellipse(0,0,60,60);
    beginShape();
    vertex(0,0);
    vertex(-30,0);
    vertex(-40,-30);
    endShape(close);
    beginShape();
    vertex(0,0);
    vertex(30,0);
    vertex(40,-30);
    endShape(close);
    beginShape();
    vertex(-30,0);
    vertex(30,0);
    vertex(0,-70);
    endShape(close);
    
    pop();
    
  push();
    
    translate(width/2,height/2);
    rotate(frameCount*PI/100);
    translate(300,60);

    
    
    fill(255,0,0);
    ellipse(0,0,60,60);
    beginShape();
    vertex(0,0);
    vertex(-30,0);
    vertex(-40,-30);
    endShape(close);
    beginShape();
    vertex(0,0);
    vertex(30,0);
    vertex(40,-30);
    endShape(close);
    beginShape();
    vertex(-30,0);
    vertex(30,0);
    vertex(0,-70);
    endShape(close);
    
    pop();
    
    
    push();
    
    translate(width/2,height/2);
    rotate(frameCount*PI/100);
    translate(100,60);

    
    
    fill(255,0,0);
    ellipse(0,0,60,60);
    beginShape();
    vertex(0,0);
    vertex(-30,0);
    vertex(-40,-30);
    endShape(close);
    beginShape();
    vertex(0,0);
    vertex(30,0);
    vertex(40,-30);
    endShape(close);
    beginShape();
    vertex(-30,0);
    vertex(30,0);
    vertex(0,-70);
    endShape(close);
    
    pop();
    push();
    
    translate(width/2,height/2);
    rotate(frameCount*PI/100);
    translate(500,60);

    
    
    fill(255,0,0);
    ellipse(0,0,60,60);
    beginShape();
    vertex(0,0);
    vertex(-30,0);
    vertex(-40,-30);
    endShape(close);
    beginShape();
    vertex(0,0);
    vertex(30,0);
    vertex(40,-30);
    endShape(close);
    beginShape();
    vertex(-30,0);
    vertex(30,0);
    vertex(0,-70);
    endShape(close);
    
    pop();
    
    
    






}