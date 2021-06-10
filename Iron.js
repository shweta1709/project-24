class Iron{
	constructor(x,y,r)
	{
		var options = {
			isStatic: false,
			'density':30,
			'friction': 3,
			'restitution':0.8,
			
		  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push();
			translate(ironpos.x, ironpos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("blue");
			ellipse(0, 0, this.r, this.r);
			pop();
	}

}