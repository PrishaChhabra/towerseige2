class Slingshot{
    constructor(bodyA,pointB){
    var options={
        length:10,
        stiffness:0.04,
        bodyA:bodyA,
        pointB:pointB
    
    }
    this.slingshot=Constraint.create(options);
    this.pointB=pointB;
    World.add(world,this.slingshot);
    }

    fly(){
        this.slingshot.bodyA=null;
        
        
        }
        attach(body){
this.slingshot.bodyA =body;
        }


    display(){
        if(this.slingshot.bodyA){
        push();
    var pointA= this.slingshot.bodyA.position;
    var pointB= this.slingshot.pointB;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    pop();
        }
    
    
    }
    
    
    
    
    
    }



  
    
      