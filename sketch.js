//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dog1Img, dog2Img



function preload()
{
  //load images here
  dog1Img = loadImage("images/dogImg.png");
  dog2Img = loadImage("images/dogImg1.png");



}

function setup() {
  database=firebase.database();
  console.log(database)

  createCanvas(500, 500);
  
//  database = firebase.database();
  

dog = createSprite(250, 250, 10, 10);
dog.addImage(dog1Img);



}


function draw() {  

  background(0, 0, 0)

  drawSprites();
  //add styles here

}



