class Game {

    constructor(){

        

    }

    start() {

        ground = createSprite(windowWidth/2,windowHeight*11/11,windowWidth*100,windowHeight*1/5);

        ground.visible = false;
        
        pirates.push(new Pirates(windowWidth/2,windowHeight*2/3-20));
        pirates.push(new Pirates(windowWidth/1.5,windowHeight*2/3-20));

        pt1 = createSprite(windowWidth*1/5,windowHeight*9.1/10,windowWidth/5,windowHeight/30);
        
        pt2 = createSprite(windowWidth*2.5/5,windowHeight*7/10,windowWidth/5,windowHeight/30);

        pt3 = createSprite(windowWidth*4/5,windowHeight*5/10,windowWidth/5,windowHeight/30);

        ipt1 = createSprite(windowWidth*1/5,windowHeight*9.1/10,windowWidth/8,windowHeight/30);

        ipt2 = createSprite(windowWidth*2.5/5,windowHeight*7/10,windowWidth/8,windowHeight/30);

        ipt3 = createSprite(windowWidth*4/5,windowHeight*5/10,windowWidth/8,windowHeight/30);

        pt1.visible = false;

        pt2.visible = false;

        pt3.visible = false;

        ipt1.visible = false;

        ipt2.visible = false;

        ipt3.visible = false;
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

        form.arrow.position(windowWidth/1.2,windowHeight/10.2);

        pt1.visible = true;
        pt2.visible = true;
        pt3.visible = true;

        ground.y = windowHeight*2;

        player.sprite.collide(ipt1);
        player.sprite.collide(ipt2);
        player.sprite.collide(ipt3);
     
        if(player.sprite.x>=windowWidth/1.2&&player.sprite.y>=windowHeight/10){

                gameState = "brickwall2";

        }


    }

        brickWall2(){

            background(brickbg);

            pt1.visible = false;
            pt2.visible = false;

            player.sprite.collide(pt3);

            pt3 = createSprite(windowWidth*4/10,windowHeight*5/10,windowWidth*10,windowHeight/30);

            pt3 = createSprite(windowWidth*4/10,windowHeight*5/10,windowWidth*10,windowHeight/30);

            // player.sprite.x = windowWidth/5;

            // player.sprite.y = windowHeight*2/3;


        }

    }

