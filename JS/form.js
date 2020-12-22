class Form {

    constructor(){

        this.lightHousebg = createImg("./Animations/LighthouseGIF.gif");

        this.lightHousebg.position(0,0);
      
        this.lightHousebg.size(windowWidth,windowHeight);
      
        this.lightHousebg.hide();
       
        this.arrow = createImg("./Animations/Arrow.gif");
        this.arrow.position(windowWidth*9/10,windowHeight/2);
        this.arrow.size(150,150);
        
    }



}