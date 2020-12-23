var player,pirates ;
var ground;
var idlePC,runningPC,runBackPC,idleLeftPC;
var idleNPC,attackrightPC;
var jumprightPC,attackleftPC;
var bg,form,game;
var gameState = "beach";

    function preload(){

  bg = loadImage("./Animations/background2.jpg") ;
    
  pirates = [];

  game = new Game();
  game.start();
  
     }

function setup() {
createCanvas(window.innerWidth,window.innerHeight);

  player = new Player(windowWidth/5,windowHeight*2/3);
  form = new Form();

}

function draw(){

  background(bg);

    player.sprite.collide(ground);

    if(gameState=="beach"){

      game.play();

    }

  //   //follow the player/game camera
  // camera.x = player.sprite.x+windowWidth/4
  // camera.y = windowHeight*2/3-windowHeight/5

  for (var p in pirates){

    player.sprite.bounceOff(pirates[p].sprite2);

   
    //Npc Attack when player gets close
    if(player.sprite.isTouching(pirates[p].sprite)){

      pirates[p].sprite.changeAnimation("AttackLeft",);

    }
    else{

        pirates[p].sprite.changeAnimation("NpcLeft",);

    }
    //decrease heath of pc when heathsprite is hit
    if(player.healthSprite.isTouching(pirates[p].sprite)&&pirates[p].sprite.animation.getFrame()===5){

      player.health-=2;

    }
    //decrease health for npc
    if(player.sprite.isTouching(pirates[p].healthSprite)&& player.status=="attack"){

     pirates[p].health--;

    }

    if(player.sprite.x>=windowWidth*9/10&&pirates[0,1].health<=0){
  
      form.lightHousebg.show();
      
    }

    pirates[p].display();
    pirates[p].sprite.collide(ground);

    

}

player.display();

drawSprites();

}



