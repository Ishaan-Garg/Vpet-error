var dogo,dog,happyDog,database,foodS,foodStock;

function preload(){
dog=loadImage(images/dogimg.png);  
happyDog=loadImage(images/dogimg.pmg);
}

function setup() {
  createCanvas(500,500);
  
dogo=addImage("dog");
database=firebase.database();
foodStock=database.ref('food');
foodStock.on("value",readStock);  
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

  }
  

  drawSprites();
}

text("milk available="+foodStock,250,250);

function readStock(data){
  foodS=data.val();
}

function writeStock('/').update({
  food:x
})



