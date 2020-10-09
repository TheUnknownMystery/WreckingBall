class ball{

    constructor(x,y,width,height,angle){
    var options={

    friction: 0.8,
    density: 1

    
    }

    this.body= Bodies.rectangle(x,y,width,height,options)
    
    this.width= width;
    this.height= height;
    World.add(world,this.body);
    
    }
    
    display(){
    
    var pos= this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x,pos.y)
    ellipseMode(CENTER);
    rotate(angle);
    stroke("black");
    fill("red");
    strokeWeight(5);
    ellipse(0,0,this.width,this.height);

    pop();
    
    
    
    
    }
    
    
    
    
    
    
    }