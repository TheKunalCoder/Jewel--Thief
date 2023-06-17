function setup() {

  createCanvas(600, 600)
  // Created Sprites for thet game 
  // lasers,laserGroup, thug and diamond
  price = createSprite(550, 500)

  rob = createSprite(70, 570)

  laserGroup = new Group()

  laser = createSprite(500, 590, 2, 4000)
  laser.shapeColor = "red"

  laser1 = createSprite(350, 450, 150, 2)
  laser1.shapeColor = "red"
  laserGroup.add(laser1)

  laser2 = createSprite(140, 450, 150, 2)
  laser2.shapeColor = "red"
  laserGroup.add(laser2)

  laser3 = createSprite(100, 300, 150, 2)
  laser3.shapeColor = "red"
  laserGroup.add(laser3)

  laser4 = createSprite(400, 300, 150, 2)
  laser4.shapeColor = "red"
  laserGroup.add(laser4)

  laser5 = createSprite(350, 150, 150, 2)
  laser5.shapeColor = "red"
  laserGroup.add(laser5)

  laser6 = createSprite(140, 150, 150, 2)
  laser6.shapeColor = "red"
  laserGroup.add(laser6)

  laser1.velocityX = +3
  laser2.velocityX = -3
  laser3.velocityX = +3
  laser4.velocityX = -3
  laser5.velocityX = +3
  laser6.velocityX = -3

  // creating edges as sprites
  edges = createEdgeSprites()
  console.log(edges)

  entry = createSprite(302, 25, 4, 4)
}

function preload() {

  diamondImg = loadImage("diamond.png")
  thugImg = loadImage("thug.png")
}

//var bg = createSprite(200, 200)



function draw() {
  background("blue")
  drawSprites()
  animator()

  if (rob.isTouching(price)) {
    background("rgb(80,149,247)")
    stroke("black")
    textFont("Pacifico");
    textSize(30)
    text("Diamond Stolen", 100, 200)
    text("Good Job", 121, 250)
  }

  if (rob.isTouching(laserGroup)) {
     rob.destroy()
     background("rgb(80,149,247)")
 
 
   }



  rob.bounceOff(edges)


  if (keyDown("up")) {
    rob.y += -6

  }

  if (keyDown("down")) {
    rob.position.y += 6
  }

  if (keyDown("right")) {
    rob.mirrorX(1)
    rob.position.x += 6

  }
  if (keyDown("left")) {
    rob.mirrorX(-1)
    rob.position.x += -6
  }
  if (rob.isTouching(entry)) {
     laser.destroy()
   }
 
 
 
   laserGroup.bounceOff(edges)
}
function animator() {
  price.addImage(diamondImg)
  price.scale = 0.07

  rob.addImage(thugImg)
  rob.scale = 0.4

  // bg.addAnimation("back")
}