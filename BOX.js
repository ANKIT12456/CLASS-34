class BOX extends BASECLASS{
    constructor(x,y,width,height){
        super(x,y,width,height);
        Matter.Body.setStatic(this.body,false);
    }

    display(){

       fill ("green");
       super.display();

    }
}