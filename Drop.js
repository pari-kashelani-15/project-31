class Drop {
    constructor(x,y, angle){
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        World.add(world, this.body);
      super(x,y,50,50);
      this.maxDrop=[];
    }
  
    display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

      super.display();
  
      if(this.body.velocity.x>10 && this.body.position.x>200)
     {
      var position=[this.body.position.x, this.body.position.y];
      this.maxDrop.push(position);
     }
    
    }
  }
  