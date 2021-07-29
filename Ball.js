class Ball {
    constructor(x, y, w){
  
      var opt={
        isStatic:false,
        restitution:0,
        frictionAir : 0.05
      }
      this.body = Bodies.circle(x, y, w/2, opt);
      World.add(world, this.body);
      this.w = w;
      //this.h = h;
    }
      display(){
        var pos = this.body.position;
        push ();
        fill ('#003016');
        noStroke();
        ellipseMode(CENTER);
        translate (pos.x, pos.y);
        ellipse(0, 0, this.w);
        pop();
      }
    }