class Rope{
    constructor(bodyA,pointB){
       // this.offsetX=offsetX
       // this.offsetY=offsetY

        var options={
            bodyA:bodyA,
            //bodyB:bodyB,
           // stiffness:0.04,
            length:300,
            pointB:pointB
        }

        this.pointB=pointB
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }

    display(){
        strokeWeight(3)
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.rope.pointB.y)
    }

}