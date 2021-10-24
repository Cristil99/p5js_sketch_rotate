var colors="212738-F97068-D1D646-EDF2EF-57C4E5-B38CB4-4F3130-753742-EE8434-F8F272".split("-").map(a=>"#"+a)

function setup() {
	
	createCanvas(1000, 1000);
	background(100);
	fill(0)
	rect(0,0,width,height)
	rectMode(CENTER)
}

function draw() {
	translate(width/2,height/2)
	fill(255)
	noStroke()
	fill(100)
	rect(0,0,width,height)
	
	push()
	blendMode(OVERLAY)
	
	for(var o=0;o<8;o++){
		rotate(PI/4)
	
	push()
	 for(var i=0;i<20;i++){
	
		 translate(0,-45)
		 rotate(sin(i/(mouseX/500+0.1)+frameCount/50))
		 scale(noise(i,o,frameCount/100)/5+0.8+0.3)
		 fill(colors[i%colors.length])
		 
		 push()
		  scale(0.4)
	     rotate(-PI/4*3)
       rect(75,0,200,50)
	     rotate(PI/4*2)
	     rect(75,0,200,50)
	
		 pop()
  	}
	pop()
	}
	pop()
	//ellipse(mouseX, mouseY, 20, 20);
}