var bg,bgImg;
var jakeImg;
var robertImg;
//var coin,coinImg;
//var diamond,diamondImg;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var runners,runner1,runner2;

function preload(){
jakeImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
robertImg=loadAnimation("run1.png","run3.png","run5.png");
bgImg=loadImage("bg.png");



}


function setup(){
createCanvas(1370,650);   
database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}






function draw(){
drawSprites();
if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

}