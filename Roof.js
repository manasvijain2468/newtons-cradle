class Roof{
    constructor(x,y,w,h){
        var options={
            isStatic : false,
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body)
        
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(128,128,128);
        rect(0,0,this.w,this.h);
        pop();
    }
}
