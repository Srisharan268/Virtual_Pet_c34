//Create variables here
var dog,dogImg,happyDog,happyDogImg,foodStock,foodS,database;

function preload()
{
	//load images here
  dogImg = loadImage("images/Dog.png");
  happyDogImg = loadImage("images/happydog.png");

}

function setup() {
	createCanvas(500,500);

  dog = createSprite(250,300);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",(data)=>{
    foodS = data.val();
  })
  
}


function draw() {  
  background(46, 139, 87);

  //add styles here
  if(keyWentDown(UP_ARROW)){
    
    if(foodS!=0){
      foodS -= 1;
    } else{
      foodS = 0;
    }

    database.ref('/').update({
      Food: foodS
    })
    dog.addImage(happyDogImg)
  }

  drawSprites();

  fill("white");
  textSize(25);
  text("Press Up Arrow To Feed Doggie Milk",40,40);
  text("Food left : " + foodS,170,75);

}



