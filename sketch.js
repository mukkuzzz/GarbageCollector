//Declaring Variables (Global)
var player,edges;
var degradableArray = [];
var nonDegradableArray = [];
var backpackdeg =0,backpacknon = 0;
var inv = 0;
var nInv = 0;
var lives = 3;
var gameState = 0;
var lifeSprites = [];
var life_sprite_0 ,life_sprite_1 ,life_sprite_2;
var score = 0;
var binD,binN;
var playerI;
var grabageI;
var grabageI2;
var background;
var dustbin_nondegradableI;
var dustbin_degradableI;

var coinI,coingrp;


function preload(){
  playerI = loadImage("./images-removebg-preview.png")
  grabageI = loadImage("./Daco_1431869.png");
  garbageI2 = loadImage('./clipart4738095.png') 
  backgroundI = loadImage("./track.png")
  dustbin_nondegradableI = loadImage("./download-removebg-preview.png");
  dustbin_degradableI = loadImage("./degradabel_bin.png")
  coinI = loadImage("./download__1_-removebg-preview.png")
}

//Setup
function setup() {
  
  //creating background canvas
  createCanvas(1910,900);
  
  //create player character- player
  player = createSprite(500, 400, 50, 50);
  player.addImage(playerI);
  edges = createEdgeSprites();

  //creating lives for the player 
  life_sprite_0 = createSprite(1500+0*90,50,50,50);
  life_sprite_1 = createSprite(1500+1*90,50,50,50);
  life_sprite_2 = createSprite(1500+2*90,50,50,50);
  life_sprite_0.shapeColor = "red";
  life_sprite_1.shapeColor = "red";
  life_sprite_2.shapeColor = "red";

  //creating dustbins for degradable and non degradable waste
  //If player touches bin - score increases based on seperation and waste disposed
  binD = createSprite(800,850,50,80);
  binN = createSprite(925,850,50,80);
  binN.addImage(dustbin_nondegradableI);

  coingrp= new Group()

}

function draw() {
  textSize(40);
  background(backgroundI);
  controls();
  if(gameState === 0){
   
    //Makes sure the player does not leave the area 
    player.bounceOff(edges);
    
    //Spwans Obstacles
    spwanDegradable();
    spwanNonDegradable();
    spwanCoins();

    if(inv+nInv < 3){
      //Checks for Collision of player with garbage
      for(var i = 0;i <= degradableArray.length-1;i++){
        var item = degradableArray[i]
        if(player.isTouching(item)){
          item.destroy();
          degradableArray.pop(item);
          inv+=1;
        }
        for(var j = 0; j<=3; j++){
          if(item.isTouching(edges[3])){
            item.destroy();
            lives--;
            text("Garbage missed",800,400)
          }
        }  
      }
      

  
      for(var i = 0;i <= nonDegradableArray.length-1;i++){
        var nItem = nonDegradableArray[i]
        if(player.isTouching(nItem)){
          nItem.destroy();
          nonDegradableArray.pop(nItem);
          nInv+=1;
        }
        for(var j = 0; j<=3; j++){
          if(nItem.isTouching(edges[3])){
            nItem.destroy();
            lives--;
            text("Garbage missed",800,400)
          }
        }
      }

      switch (lives){
        case 3:
          break;
        case 2:
          life_sprite_0.destroy();
          break;
        case 1:
          life_sprite_1.destroy();
          break;
        case 0:
          life_sprite_2.destroy();
          break;
      }
      
      
    }
    if(coingrp.isTouching(player)){
      coingrp.destroyEach();
      score+=100;
    }

    
    else if(inv+nInv ===  3){
      text("Your bag is full empty it in the garbage bin!!",805,450);
    }
   
    if(player.isTouching(binD)){
      score += Math.round(inv*10);
      inv = 0;
    }
    if(player.isTouching(binN)){
      score += Math.round(nInv*15);
      nInv=0;
    }

    //changing game state to end
    if(lives<=0){
      gameState=1;
    }
    fill(0)
    textSize(40);
    strokeWeight(10)
    text("D :"+inv,50,50);
    text("ND :"+nInv,50,100);
    text("SCORE : "+score,50,150);
  
  }
  
  
  
  // console.log(gameState)
  drawSprites();

  // textSize(40);
  // text(inv,50,50);
  // text(nInv,125,50);
  // text(score,175,50);
  
  //Checks for game end
   if(gameState===1){
    textSize(40);
    fill(255)
    text("Oops!! The garbage was left over..Try again!!",805,300);
    player.destroy();
    degradableArray = [];
    nonDegradableArray = [];
    coingrp.destroyEach();
    coingrp.setVelocityYEach(0);
    fill(0)
    textSize(40);
    text(score,1920/2,900/2);
    console.log("GameState:"+gameState) 
  }

}

function spwanDegradable(){
  if(frameCount % 300 === 0){
    var garbage = createSprite(Math.round(random(200,1500)),0,50,50);
    garbage.velocityY = 8 + score/100;
    garbage.lifetime = 113;
    garbage.shapeColor = "green";
    garbage.addImage(garbageI2);
    garbage.scale = 0.2;
    //player.depth = garbage.depth;
    degradableArray.push(garbage);

  }
}

function spwanNonDegradable(){
  if(frameCount % 400 === 0){
    var garbage = createSprite(Math.round(random(200,1500)),0,50,50);
    garbage.velocityY = 8 + score/100;
    garbage.lifetime = 400;
    garbage.shapeColor = "blue";
    garbage.addImage(grabageI);
    garbage.scale = 0.1;
    //x.depth = garbage.depth;
    nonDegradableArray.push(garbage);
  }
}

function spwanCoins(){
  if(frameCount % 700 === 0){
    var coin = createSprite(Math.round(random(200,1500)),0,50,50)
    coin.velocityY = 5;
    coin.lifetime = 400;
    coin.scale=0.3;
    coin.addImage(coinI);
    coingrp.add(coin); 
  }
}

function controls(){
  if(keyDown(UP_ARROW) || keyDown("W")){
    player.y-=10+score/100;
  }
  if(keyDown(DOWN_ARROW) || keyDown("S")){
    player.y+=10 +score/100;
  }
  if(keyDown(LEFT_ARROW) || keyDown("A")){
    player.x-=10 + score/100;
  }
  if(keyDown(RIGHT_ARROW) || keyDown("d")){
    player.x+=10 + score/100;
  }
}

