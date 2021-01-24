class Box{

constructor(x,y,w,h){

this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,{isStatic:false})
World.add(world,this.body);

}
display(){

var boxpos=this.body.position;

push();
translate(boxpos.x,boxpos.y);
fill("blue")
stroke("black");
strokeWeight(4);
rect(0,0,this.w,this.h);
pop();


}


}