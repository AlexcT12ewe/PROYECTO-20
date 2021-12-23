var bg,sleep, brush, gym, eat, bath, move;
var astronauta;

function preload(){
  //Cargar imágenes y animaciones 
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
 
}

function setup() {
  createCanvas(400, 400);
  
  //Sprite astronauta
  astronauta = createSprite(450,330);
  astronauta.addAnimation("sleeping", sleep);
  astronauta.scale = 0.1;
}

function draw() {
  //fondo de pantalla para la rutina del astronauta
  background(bg);

  textSize(30);
  fill(255);
  text("Instrucciones:",10,39);
  
  //texto para mostrar instrucciones sobre cómo ejecutar el juego
  textSize(17);
  fill(255);
  text("Flecha hacía arriba: cepillarse",10,59);
  
  textSize(17);
  fill(255);
  text("Flecha hacía abajo: ejercitarse",10,77);

  textSize(17);
  fill(255);
  text("Flecha hacía la izquierda: comer",10,98);

  textSize(17);
  fill(255);
  text("Flecha hacía la derecha: bañarse",10,120);

  textSize(17);
  fill(255);
  text("Barra de espacio: beber",10,140);

  textSize(17);
  fill(255);
  text("Tecla m: moverse",10,160);
 
  // rebota del astronauta en los bordes
  edges= createEdgeSprites();
  astronauta.bounceOff(edges);
  
  //código para hacer que el astronauta se cepille
  if (keyDown(UP_ARROW)){
    astronauta.addAnimation("brushing", brush);
    astronauta.changeAnimation("brushing");
    astronauta.y = 250;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)){
    astronauta.addAnimation("eating", eat);
    astronauta.changeAnimation("eating");
    astronauta.y = 250;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  if (keyDown(DOWN_ARROW)){
    astronauta.addAnimation("gyming", gym);
    astronauta.changeAnimation("gyming");
    astronauta.y = 250;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  if (keyDown(RIGHT_ARROW)){
    astronauta.addAnimation("bathing", bath);
    astronauta.changeAnimation("bathing");
    astronauta.y = 250;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  if (keyDown ("SPACE")){
    astronauta.addAnimation("drinking", drink);
    astronauta.changeAnimation("drinking");
    astronauta.y = 250;
    astronauta.velocityY = 0;
    astronauta.velocityY = 0;
  }
  if(keyDown("m")){ 
    astronauta.addAnimation("moving", move); 
    astronauta.changeAnimation("moving"); 
    astronauta.velocityX = 1; 
    astronauta.velocityY = 1; 
  }

  drawSprites();
}