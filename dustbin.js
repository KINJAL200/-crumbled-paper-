class dustbin
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
			this.leftbody=Bodies.rectangle(x- 0, y- 0, options)
			this.rightbody=Bodies.rectangle(x -0, y- 0, options)

        this.centerbody=Bodies.rectangle(x, y-60,100,20, options)
        
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
        World.add(world, this.centerbody);
		this.image=loadImage("dustbingreen.png");

	}
	display()
	{
			
				

			
			push();
			rectMode(CENTER)
		
			fill(255)
            imageMode(CENTER);
           
           
            rect(this.centerbody.position.x,this.centerbody.position.y,100,20)
            rect(this.leftbody.position.x,this.leftbody.position.y,20,100)
            rect(this.rightbody.position.x,this.rightbody.position.y,20,100)
			image(this.image,this.centerbody.position.x,this.centerbody.position.y-50,150, 190)

		    pop();
			
	}

}