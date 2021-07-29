class Brect {
    constructor(x, y, w, h){
  
      var opt={
        isStatic:true,
      }
      this.body = Bodies.rectangle(x, y, w, h,opt);
      World.add(world, this.body);
      this.w = w;
      this.h = h;
    }show(a){
      var pos = this.body.position;
      array = ['#ff4500','#003016']
      push ();
      fill (array[a]);
      noStroke();
      // strokeWeight(5);
      rectMode(CENTER);
      translate (pos.x, pos.y);
      rect(0, 0, this.w, this.h);
      pop ();

    }
  }