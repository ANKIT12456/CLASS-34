class BALL extends BASECLASS{

    constructor(x,y,width,height){
        super(x,y,width,height);
        Matter.Body.setStatic(this.body,false);
    }

    show(){
        fill("pink");
        super.show();
    }


    
}