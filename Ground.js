class Ground extends Parent{
    constructor(x,y,width,height) {
      super(x,y,width,height)
      Matter.Body.setStatic(this.body,true)
      this.image = loadImage("IMAGES/ground.png")
      }
   
    
    display(){
     super.display()
    }
  };