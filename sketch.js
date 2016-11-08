var cities;
var rowCount;
var catY=1;
var catX=1;
var dogX=200;
var dogY=200;
var testX,testY;
var c = "CAT";
var d = "DOG";
var cX = 100;
var cY = 100;
var dX = 400;
var dY = 100;
function preload() {
  incidents = loadTable("animals.csv", "header")
}

function setup() {
  createCanvas(680, 500);

  rowCount = incidents.getRowCount();
  background(0);
  fill(255);
  noStroke();

  for(var i = 0; i < rowCount; i++){
    var s = incidents.getString(i, "SPECIES");
    console.log(s);
    if(s==c){
      catX= catX + 1;
    }
    if(s==d){
      dogX = dogX + 1;
    }
  }


  dogY = dogX/5;
  catY = catX/5;
}

function draw() {

  ellipse(cX,cY,1);
  if(dogY > 9){
    cY = cY + 10;
    dogY = dogY - 5;
    }

  if(cY > 250){
    cY =  100;
    cX = cX + 5;
  }



  ellipse(dX,dY,1);
  if(catY > 9){
    dY = dY + 5;
    catY = catY - 5;
    }

  if(dY > 250){
    dY =  100;
    dX = dX + 10;
  }



}
