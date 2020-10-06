class Box {

constructor(x,y,width,height){

    var object_options={
        restitution: 1
      }

      this.object=Bodies.rectangle(x,y,width,height,object_options);
      this.width=width;
      this.height=height;
      World.add(world,this.object);
}
display(){

    var pos=this.object.position;

    var angle=this.object.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("lime");
    rect(0,0,this.width,this.height);
   pop();
}



}