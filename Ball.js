class Ball{
    constructor(x, y, width, height){
      var options = 
      {frictionAir:0.005, 
     density: 1.0
  }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    World.add(world,this.body) 
    }
    display(){
      var position = this.body.position
      push ();
      translate(position.x,position.y)
      rotate(this.body.angle)
      ellipseMode(RADIUS)
      fill("blue")
      ellipse(0,0,this.width,this.height)
      pop();
      
  
    }
  
  };
  