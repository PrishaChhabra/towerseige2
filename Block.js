class Block{
    constructor(x, y, width, height,color) {
      var options = {
           
          'restitution':0,
          'friction':0,
          'density':1.0
         
      }
    this.color=color;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
       
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      //stroke("yellow");
      fill(this.color);
      rect(0, 0, this.width, this.height,this.color);
      pop();
      }
else{

    World.remove(world,this.body)
push();
     this.visibility=this.visibility-20
     tint(255,this.visibility);
     
pop();

}


    }
  }