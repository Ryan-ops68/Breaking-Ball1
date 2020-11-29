class Box{
  constructor(x, y, width, height){
    var options = 
    {restitution:0.8, 
    friction:1.0, 
  density: 0.04
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
    rectMode(CENTER)
    fill("red")
    rect(0,0,this.width,this.height)
    pop();

  }

};
