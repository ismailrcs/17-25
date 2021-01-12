class Pirates {

    constructor(x,y){

        this.sprite = createSprite(x,y,55,55);
        this.status = "normal";
        this.healthSprite = createSprite(x,y,75,190);
        this.sprite2 = createSprite(x,y+100,50,50);
        // this.healthSprite.shapeColor = "red";
        this.healthSprite.visible = false;
        this.sprite2.visible = false;
        this.health = 0;

        this.idleNPC = loadAnimation("./Animations/Npc_back/Nb1.png","./Animations/Npc_back/Nb2.png");
        this.idleNPC.frameDelay = 6;

        this.NpcAttackBack = loadAnimation("./Animations/Npc_attackback/Nab1.png","./Animations/Npc_attackback/Nab2.png",
        "./Animations/Npc_attackback/Nab3.png" ,"./Animations/Npc_attackback/Nab4.png","./Animations/Npc_attackback/Nab5.png",
        "./Animations/Npc_attackback/Nab6.png");

        this.NpcAttackFront = loadAnimation("./Animations/Npc_attackfront/Naf1.png","./Animations/Npc_attackfront/Naf2.png",
        "./Animations/Npc_attackfront/Naf3.png" ,"./Animations/Npc_attackfront/Naf4.png","./Animations/Npc_attackfront/Naf5.png",
        "./Animations/Npc_attackfront/Naf6.png");

        this.npcDead = loadAnimation("./Animations/npc dead.png");

        this.sprite.addAnimation("NpcLeft",this.idleNPC);

        this.sprite.addAnimation("AttackLeft",this.NpcAttackBack);

        this.sprite.addAnimation("AttackBack",this.NpcAttackFront);

        this.sprite.addAnimation("Npcdead",this.npcDead);
        
        this.sprite.scale = 0.7;

        // this.sprite.debug = true;

        //this.sprite.setCollider("rectangle",0,-38,300,300)
    }

    display(){

        this.sprite.velocityY+=0.9;

    if(this.health<=0){

       this.sprite.changeAnimation("Npcdead");

       this.sprite.setCollider("rectangle",0,0,100,100);

       this.sprite.scale = 0.56;
       
       this.sprite2.y = windowHeight*2;
  
      }else{

        fill("White");
        stroke("White");
         
        if(gameState == "brickWall"||gameState == "brickwall2"){

          text(this.health,this.sprite.x,windowHeight/4);

        }else{

        text(this.health,this.sprite.x,windowHeight/2);
        
        }
      }

      if(player.health<=0){

        gOver.visible = true;
        
      }

    }

}