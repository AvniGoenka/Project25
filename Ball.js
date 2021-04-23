class Ball
{
constructor(x,y)
	{
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
		this.x=x;
		this.y=y;
		this.ballWidth=200;
		this.ballHeight=213;
		
		this.image=loadImage("paper.png")
	
	}
	display(){
			push()
			translate(x,y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			rect(0,0);
			pop()
			
	}

}