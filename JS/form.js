class Form {

constructor(){

    this.lighthousegif = createImg("./Animations/lighthouse.gif");
    this.lighthousegif.position(0,0);
    this.lighthousegif.size(windowWidth,windowHeight);
    this.lighthousegif.hide();

    this.arrow = createImg("./Animations/Arrow.gif");
    this.arrow.position(windowWidth*9/10,windowHeight/2);
    this.arrow.size(150,150);

    this.win = createElement("h2");
    this.win.html(" YOU WIN ");
    this.win.position(windowWidth/2,windowHeight/2);
    // this.win.style('position:absolute');
    // this.win.style('top:50%,left:50%');
    this.win.style("z-index:100");
    this.win.hide();

}



}