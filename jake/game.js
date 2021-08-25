class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      
      
    }
  
    play(){
      form.hide();
      bg=createSprite(500,300,10,10);
bg.addImage(bgImg);
bg.scale=2.2;
runner1=createSprite(700,550,10,10);
runner1.addAnimation("jake",jakeImg);
runner2=createSprite(400,550,10,10);
runner2.addAnimation("robert",robertImg);
runner2.scale=2.5;

    runners=[runner1,runner2]
      
      Player.getPlayerInfo();
     // player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x =100 ;
        var y=200;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          //x = x + 200;
          //use data form the database to display the cars in y direction
          x = 500 - allPlayers[plr].distance;
          y=500;
          runners[index-1].x = x;
          runners[index-1].y = y;
         // console.log(index, player.index)
  
         
         
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.distance +=30
        player.update();
      }

      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance -=30
        player.update();
      }
  

  
      if(player.distance > 3860){
        gameState = 2;
        player.rank=player.rank+1;
        //Player.updateCarsAtEnd(player.rank);
  
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      console.log(player.rank);
    }
  }
  