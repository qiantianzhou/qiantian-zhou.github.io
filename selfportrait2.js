let img;
let r = 0;
let g = 0;
let b = 0;
let rState = true;
let gState = true;
let bState = true;

function setup(){

	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display',"block");
	cnv.parent('content');
	img = loadImage('background.jpg');
}

function draw() {
	background(119,119,119);
	noStroke();
	image(img,0,0,width,height);
	translate(width/2, height/2);
	 rotate(frameCount*PI/60);
	push();
	translate(200,60);
	 rotate(frameCount*PI/20);

	// push();
	// if(r > 255 || r > 0){
	// 	rState = ! rState;
	// }
	// if(g > 255 || g < 0){
	// 	gState = ! gState;
	// }
	// if(b > 255 || b < 0){
	// 	bState = ! bState;
	// }


	fill(255,119,199);
	ellipse(0,0,200,230); //face

	// if (frameCount % 2 == 0){
	// 	if (rState){
	// 		r++;
	// 	}
	// 	else{
	// 		r--;
	// 	}
	// }
	// if (frameCount % 3 == 0){
 //        if (gState){
 //            g++;
 //    }
 //        else{
 //            g--;
 //    }
	// }
	//  if (!bState){
 //        b++;
 //    }
 //    else{
 //        b--;
 //    }
 //    pop();


	fill(143, 122, 83);
	ellipse(-40,-20,40,30);
	ellipse(40,-20,40,30); //eyes


	push();
	if(r > 255 || r > 0){
		rState = ! rState;
	}
	if(g > 255 || g < 0){
		gState = ! gState;
	}
	if(b > 255 || b < 0){
		bState = ! bState;
	}

	fill(r,g,b);
	ellipse(-40,-20,20,20);
	ellipse(40,-20,20,20); // white part of the eyes

	if (frameCount % 2 == 0){
		if (rState){
			r++;
		}
		else{
			r--;
		}
	}
	if (frameCount % 3 == 0){
        if (gState){
            g++;
    }
        else{
            g--;
    }
	}
	 if (!bState){
        b++;
    }
    else{
        b--;
    }
    pop();


	fill(240, 205, 103);
	beginShape();
	vertex(0,0);
	vertex(-20,20)
	vertex(20,20);
	endShape(close);
	fill(212, 177, 74);
	ellipse(0,20,40,15); // nose


	fill(0,0,0);
	push();
	translate(-40,0);
	ellipse(map(mouseX, 0, width,-5,5),-20,10,10);
	pop();
	push();
	translate(40,0);
	ellipse(map(mouseX, 0, width,-5,5),-20,10,10); //eyeball
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
	endShape(close); //mouth
	pop();
	






}