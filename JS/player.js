class Player {

    constructor(x,y){

        this.sprite = createSprite(x,y,50,50);
        this.direction = "right"
        this.status = "normal";
        this.healthSprite = createSprite(x,y,65,90);
        this.healthSprite.visible = false;
        this.health = 100;
        this.healthSprite.debug =  true;

        // this.healthBar = document.createElement("PROGRESS");
        // this.healthBar.setAttribute("max",100);
        // this.healthBar.setAttribute("value",this.health);
        // document.body.appendChild(this.healthBar);
        

        this.sprite.setCollider("rectangle",0,0,135,115 );
        
        this.idlePC = loadAnimation("./Animations/Idle_Animations/Idle1.png","./Animations/Idle_Animations/Idle2.png",
        "./Animations/Idle_Animations/Idle3.png","./Animations/Idle_Animations/Idle4.png","./Animations/Idle_Animations/Idle5.png");

        this.runningPC = loadAnimation("./Animations/Running_Animations/Run1.png","./Animations/Running_Animations/Run2.png",
        "./Animations/Running_Animations/Run3.png","./Animations/Running_Animations/Run4.png","./Animations/Running_Animations/Run5.png",
        "./Animations/Running_Animations/Run6.png");

        this.runBackPC = loadAnimation("./Animations/Run_back/Rb1.png","./Animations/Run_back/Rb2.png","./Animations/Run_back/Rb3.png",
        "./Animations/Run_back/Rb4.png","./Animations/Run_back/Rb5.png","./Animations/Run_back/Rb6.png");

        this.idleLeftPC = loadAnimation("./Animations/Idle_left/il1.png","./Animations/Idle_left/il2.png","./Animations/Idle_left/il3.png",
        "./Animations/Idle_left/il4.png","./Animations/Idle_left/il5.png");

        this.jumprightPC = loadAnimation("./Animations/Jumpfront/Nf1.png","./Animations/Jumpfront/Nf2.png","./Animations/Jumpfront/Nf3.png",
        "./Animations/Jumpfront/Nf4.png","./Animations/Jumpfront/Nf5.png");

        this.attackrightPC = loadAnimation("./Animations/Attackright/sprite_1.png","./Animations/Attackright/sprite_2.png",
        "./Animations/Attackright/sprite_3.png","./Animations/Attackright/sprite_4.png");

        this.attackrightPC.frameDelay = 4

        this.attackleftPC = loadAnimation("./Animations/Attackleft/sprite_1.png","./Animations/Attackleft/sprite_2.png",
        "./Animations/Attackleft/sprite_3.png","./Animations/Attackleft/sprite_4.png");

        this.dieRight = loadAnimation("./Animations/Dyingright/sprite_1.png","./Animations/Dyingright/sprite_2.png",
        "./Animations/Dyingright/sprite_3.png","./Animations/Dyingright/sprite_4.png","./Animations/Dyingright/sprite_5.png");

        this.dieLeft = loadAnimation("./Animations/Dyingleft/sprite_1.png","./Animations/Dyingleft/sprite_2.png",
        "./Animations/Dyingleft/sprite_3.png","./Animations/Dyingleft/sprite_4.png","./Animations/Dyingleft/sprite_5.png");


        this.sprite.addAnimation("Idle",this.idlePC);
        this.sprite.addAnimation("Run",this.runningPC);
        this.sprite.addAnimation("Runback",this.runBackPC);
        this.sprite.addAnimation("IdleLeft",this.idleLeftPC);
        this.sprite.addAnimation("Jumpright",this.jumprightPC);
        this.sprite.addAnimation("Attackright",this.attackrightPC);
        this.sprite.addAnimation("Attackleft",this.attackleftPC); 
        this.sprite.addAnimation("DieLeft",this.dieLeft);
        this.sprite.addAnimation("DieRight",this.dieRight);

        this.sprite.scale = 1.4;

        this.sprite.debug = true;

        this.healthSprite.debug = true;

       
    }

    display(){

    // Gravity
    this.sprite.velocityY+= 0.8;

    if(keyDown(LEFT_ARROW)){

        this.sprite.x-=5;
        this.sprite.changeAnimation("Runback");
        this.direction = "left";
    
    }  else if(keyDown(RIGHT_ARROW)){
    
        this.sprite.x+=5;
        this.sprite.changeAnimation("Run");
        this.direction = "right";
     
    }   else if (this.status == "normal"){
    
        if(this.direction == "right"){
           this.sprite.changeAnimation("Idle");
        }   else{
    
            this.sprite.changeAnimation("IdleLeft");

        }
    } 
        
    if(keyDown(UP_ARROW)&&this.sprite.y>465){
    
        this.sprite.velocityY = -12;
        if(this.direction == "right"){
        this.sprite.changeAnimation("Jumpright");
        }else if(this.direction == "left"){

            this.sprite.changeAnimation("Jumpleft");

        }

    }

    if(keyDown("space")){

        this.status = "attack";
       if(this.direction == "right"){
        this.sprite.changeAnimation("Attackright");
       }else{

        this.sprite.changeAnimation("Attackleft");

       }
        setTimeout(()=>{

            this.status ="normal";

        },500);

    }

    this.healthSprite.x=this.sprite.x;
    this.healthSprite.y=this.sprite.y;

    text(this.health,this.sprite.x,windowHeight/2);


    }

}