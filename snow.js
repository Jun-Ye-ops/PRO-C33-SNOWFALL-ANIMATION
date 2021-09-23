class snowfall{
    constructor(x,y,width,height){
        var options={
            friction:1,
            density:1

        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("snow5.webp")
        World.add(world,this.body)
    }
    display(){
        var position=this.body.position
        push()
        translate(position.x,position.y)
       
        imageMode(CENTER)
        
        image(this.image,0,0,width,height)
        pop()
        
    }

    
}

