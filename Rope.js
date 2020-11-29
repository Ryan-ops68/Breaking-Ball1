class Rope{
    constructor(bodyA,pointB){
      var options = 
      {length:250,
        stiffness:1.2,
        bodyA:bodyA,
        pointB:pointB
  }
    this.pointB = pointB
    this.rope = Constraint.create(options)
    World.add(world,this.rope) 
    }
    fly(){
        this.rope.bodyA = null
    }
    attach(body){
        this.rope.bodyA = body
    }
    display(){
      if (this.rope.bodyA){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        push();
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
      }
      
  
    }
  
  };
  