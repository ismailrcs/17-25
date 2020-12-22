class Game {

    constructor(){

        

    }

    start() {

        ground = createSprite(windowWidth/2,windowHeight*11/11,windowWidth*100,windowHeight*1/5);

        ground.visible = false;

     
        
        pirates.push(new Pirates(windowWidth/2,windowHeight*2/3-20));
        pirates.push(new Pirates(windowWidth/1.5,windowHeight*2/3-20));

       

    }

    play() {




    }

}