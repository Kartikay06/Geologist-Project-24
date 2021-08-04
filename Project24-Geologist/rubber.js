class Rubber {
    constructor(x,y,r){
    
     var options={
    
    'restitution':0.3,
    'friction':5,
    'density':1
     }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body= Bodies.circle(this.x,this.y,(this.r-20)/2,options);
    //this.width=50;
    //this.height=30;
    World.add(world,this.body);
    
    }
    display(){
    
    var rubberpos=this.body.position;
    push ();
    translate(rubberpos.x,rubberpos.y);
    rectMode(CENTER);
    //var angle= this.body.angle;
    strokeWeight(4);
    stroke("black");
    fill("darkblue");
    ellipse(0,0,this.r,this.r)

    //rect(0,0,this.width,this.height);
    pop();
    }
    
    
    }