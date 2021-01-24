class Chain{

    constructor(bodyA,pointB){
        var options = {
       bodyA:bodyA,
       pointB:pointB,
       stiffness:0.04,
       length:10
        }
        this.pointB=pointB;
        this.chain=Constraint.create(options);
       World.add(world,this.chain);
    }
    fly(){

     this.chain.bodyA = null;

}
    
    
   
    display(){
    
        
          
            var pointB=this.pointB;
            fill("white");
            strokeWeight(4);
            
    }
}