class Bird extends Parent {
    constructor(x, y) {
      super(x,y,50,50)
     
      this.image = loadImage("IMAGES/bird.png")
    
    }
    display(){
      var pos =this.body.position;
      pos.x= mouseX;
      pos.y= mouseY
      super.display()
      
    }
  };
  