var plane, enemy;
var bullet, bulletImg, planeimg, enemyImage;
var bulletSound,blastSound;
var bulletGroup, enemyGroup;
var score = 0;
var defenceLine;
var bg;

var x = [125, 210, 310, 555, 890, 1000, 15, 455]
function preload() {
  bulletImg = loadImage("Images/bullet.png");
  planeimg = loadImage("Images/Plane.jpg");
  enemyImage = loadImage("Images/Eplane.png");
  blastSound = loadSound("Sounds/Explo.mp3")
  bulletSound = loadSound("Sounds/Laser.wav")
  bg = loadImage("Images/bg.jpg")
}

function setup() {
  createCanvas(1366, 625);
  plane = new Player(665, 510);
  bulletGroup = new Group();
  enemyGroup = new Group();
  defenceLine = createSprite(665, 8000, 625 * 2 * 2, 15000);
  defenceLine.visible = false;

}
function draw() {
  background(bg);

  text("Score : " + score ,100,40)

  if (keyDown("space")  ||mousePressedOver(plane.player) || keyDown(38))
  {
    bullet = createSprite(plane.player.position.x, 510, 15, 15)
    bullet.velocityY = -20
    bulletSound.play();
    bulletGroup.add(bullet);
  }

  if (frameCount % 75  === 0) {
    enemy = new Enemy(random([100, 300, 500, 900, 1200, 1000, 1300]), 0, 50, 50);
    enemyGroup.add(enemy.enm);
  }

  if (defenceLine.isTouching(enemyGroup)) {
    textSize(50)
  text(" You Lost , " + "Press Ctrl + R to Restart", 300,625/2)
    fill("Red")
    enemy.enm.velocityY = 0;
    enemy.enm.destroy();
    plane.player.destroy();
    bullet.destroy();
  }

  move();
  destroy();

  drawSprites();
}

function move() {
  if (keyDown(39)) {
    plane.player.position.x = plane.player.position.x + 20
  }
  else if (keyDown(37)) {
    plane.player.position.x = plane.player.position.x - 20
  }
}

function destroy() {
  if (bulletGroup.isTouching(enemyGroup)) {
    enemyGroup.destroyEach();
    blastSound.play();
    score = score + 1;
  }
  
}
// function destroy2()
// {

// }