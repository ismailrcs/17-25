var player,pirates ;
var ground;
var idlePC,runningPC,runBackPC,idleLeftPC;
var idleNPC,attackrightPC;
var jumprightPC,attackleftPC;
var bg,form,game;
var gameState = "beach";
var gOver,button;
var rightButton,leftButton,upButton,attackButton;

var pt1,pt2,pt3,pt4;
var ipt1,ipt2,ipt3;

function preload(){

  bg = loadImage("./Animations/background2.jpg") ;

  lightHousebg = loadImage("./Animations/LighthouseGIF.png");

  brickbg = loadImage("./Animations/brickwall.jpg");

  gameOver = loadAnimation("./Animations/gameover.png");

  redbutton = loadAnimation("Animations/redbutton.png");

  pirates = [];

  game = new Game();
  game.start();

}

function setup() {
  
  createCanvas(window.innerWidth,window.innerHeight);

  player = new Player(windowWidth/5,windowHeight*2/3);
  form = new Form();

  gOver = createSprite(windowWidth/2,windowHeight/2,10,10);

  gOver.addAnimation("gameover",gameOver);

  gOver.visible = false;

  button =  createSprite(windowWidth/1.2,windowHeight/3,50,50);

  button.addAnimation("red",redbutton);

  button.scale = 0.2;

  button.visible = false;

  window.onresize = function(){ location.reload(); }

}


function draw(){

  background(bg);


    if(gameState=="beach"){

      game.beach();

    }

    if(gameState=="lightHouse"){

      game.lightHouse();

    }

    if(gameState == "brickWall"){

      game.brickWall();

    }

    if(gameState == "brickwall2"){

      game.brickWall2();

    }

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
    if(player.healthSprite.isTouching(pirates[p].sprite)&&pirates[p].sprite.animation.getFrame()===5&&pirates[p].health>0){

      player.health-=2;

    }
    //decrease health for npc
    if(player.sprite.isTouching(pirates[p].healthSprite)&& player.status=="attack"){

      pirates[p].health--;

    }

    pirates[p].display();
    pirates[p].sprite.collide(ground);
    
    if(window.innerWidth<=600){

  rightButton = createButton(' > ');
  rightButton.position(windowWidth*9.4/10,windowHeight*9/10);
  rightButton.size(75);
  rightButton.mousePressed(runFront);

  leftButton = createButton(' < ');
  leftButton.position(windowWidth*8.8/10,windowHeight*9/10);
  leftButton.size(75);
  leftButton.mousePressed(runBack);

  upButton = createButton('jump');
  upButton.position(windowWidth*9.1/10,windowHeight*8.5/10);
  upButton.size(75);
  upButton.mousePressed(jump);

  attackButton = createButton('ATTACK');
  attackButton.position(windowWidth*0.5/10,windowHeight*8.5/10);
  attackButton.size(75);
  attackButton.mousePressed(attack);

    }

  }

player.display();

drawSprites();

}

function runFront(){

  player.sprite.x+=5;
  player.sprite.changeAnimation("Run",);
  player.direction = "right";
   
}


function runBack(){
   
  player.sprite.x-=5;
  player.sprite.changeAnimation("Runback",);
  player.direction = "left";

  }

  function jump() {

    player.sprite.velocityY = -12;
    if(player.direction == "right"){
    this.sprite.changeAnimation("Jumpright",);
    }else if(player.direction == "left"){

    player.sprite.changeAnimation("Jumpleft",);

    }

  }

  function attack(){

    player.status = "attack";
    
    if(player.direction == "right"){
        
        player.sprite.changeAnimation("Attackright",);

    }else{

    player.sprite.changeAnimation("Attackleft",);

    }
    setTimeout(()=>{

    player.status ="normal";

    },500);

  }

   
