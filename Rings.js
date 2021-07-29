class Rings{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    
}move(){
    this.x = this.x + random(-3,3);
    this.y = this.y +random(-2,2);

}display(){
    strokeWeight(4);
    stroke(ringu());
    fill ('#00000000');
    ellipse(this.x, this.y, this.r);
}
    }