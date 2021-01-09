class Form {

    constructor(){

        this.lighthousegif = createImg("./Animations/lighthouse.gif");
        this.lighthousegif.position(0,0);
        this.lighthousegif.size(windowWidth,windowHeight);
        this.lighthousegif.hide();

        this.arrow = createImg("./Animations/Arrow.gif");
        this.arrow.position(windowWidth*9/10,windowHeight/2);
        this.arrow.size(150,150);
        
    }



}