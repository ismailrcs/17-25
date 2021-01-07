class Game {

    constructor(){

        

    }

    start() {

        ground = createSprite(windowWidth/2,windowHeight*11/11,windowWidth*100,windowHeight*1/5);

        ground.visible = false;
        
        pirates.push(new Pirates(windowWidth/2,windowHeight*2/3-20));
        pirates.push(new Pirates(windowWidth/1.5,windowHeight*2/3-20));

       

    }

    beach(){

        for (var p in pirates){

      
           if(player.sprite.x>=windowWidth*9/10&&pirates[p].health<=0){
        
            // form.lightHousebg.show();
                  
            pirates[p].sprite.visible = false;
      
            console.log(pirates.length,p);
      
            if(p==(pirates.length-1)){
             player.sprite.x = windowWidth/5;
              player.sprite.y = windowHeight*2/3;
             
              gameState = "lightHouse";

              pirates = [];

              pirates.push(new Pirates(windowWidth/2.7,windowHeight*2/3-20));

          }
          
          
        }
        
      }        

    }
    
    lightHouse() {

       background(lightHousebg);

       form.arrow.position(windowWidth/2.2,windowHeight*2/3-20);

        for(var p in pirates){
        
            if(player.sprite.x>=windowWidth/2.2&&pirates[p].health<=0){
                                
                pirates[p].sprite.visible = false;
        
                console.log(pirates.length,p);
        
                if(p==(pirates.length-1)){
                player.sprite.x = windowWidth/5;
                player.sprite.y = windowHeight*2/3;

                gameState = "brickWall";

                pirates = [];

            }

        }

    }
    
    }
    
    brickWall(){

        background(brickbg);

    }

    }

