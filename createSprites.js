function createInfinityst1(){
    is1 = createSprite(500, 300, 10, 10);
    is1.addImage(i1Img);
    is1.visible = false;
    is1.scale = 0.7;
  }
  
  function createInfinityst2(){
    is2 = createSprite(500, 300, 10, 10);
    is2.addImage(i2Img);
    is2.visible = false;
    is2.scale = 0.7;
  }
  
  function createInfinityst3(){
    is3 = createSprite(500, 300, 10, 10);
    is3.addImage(i3Img);
    is3.visible =false;
    is3.scale = 0.7;
  }
  
  function createInfinityst4(){
    is4 = createSprite(500, 300, 10, 10);
    is4.addImage(i4Img);
    is4.visible=false;
    is4.scale = 0.7;
  }
  
  function createInfinityst5(){
    is5 = createSprite(500, 300, 10, 10);
    is5.addImage(i5Img);
    is5.visible=false;
    is5.scale = 0.7;
  }
  
  function createInfinityst6(){
    is6 = createSprite(500, 300, 10, 10);
    is6.addImage(i6Img);
    is6.visible=false;
    is6.scale = 0.7;
  }
  
  function createNinja(){
    ninja = createSprite(100, 290, 20, 20);
    ninja.addAnimation("running",ninjaImg);
    ninja.addAnimation("fighting1",ninjaFightingImg);
    ninja.addAnimation("shooting", ninjaShootingImg);
    ninja.addAnimation("jumping", ninjaJumpingImg);
    ninja.addAnimation("stop", ninjaStopImg);
    ninja.scale = 0.5;
    //ninja.debug = true;
    ninja.setCollider("rectangle", 0, 0, 60, 260);
  }
  
  function createDeadNinja(){
    ninjaDied = createSprite(100,290,20,20);
    ninjaDied.addImage(ndImg);
    ninjaDied.scale = 0.7;
    ninjaDied.visible=false;
  }
  
  function createGameOver(){
    gameOver = createSprite(750,200,20,20);
    gameOver.addImage(gameoverImg);
    gameOver.scale = 0.7;
    gameOver.visible=false;
  }
  
  function createYouWin(){
    win = createSprite(750,200,20,20);
    win.addImage(winImg);
    win.scale = 0.7;
    win.visible=false;
  }
  
  function createThanos(){
    thanos = createSprite(1400, 270, 10, 10);
    thanos.addImage(thanosImg);
    thanos.scale = 0.5;
    thanos.debug = false;
    thanos.visible =false;
    thanos.setCollider("rectangle", 0, 0, 200, 300);
  }
  
  function createLaser(){
    laser = createSprite(130, 290, 10, 10);
    laser.addImage(laserImg);
    laser.velocityX = 0;
    laser.scale = 0.25;
    laser.visible = false;
    laser.setCollider("rectangle", 0, 0, 40, 200);
    laser.debug = true;
  }
  
  function createGround(){
    ground = createSprite(750, 350, 1500, 20);
    ground.visible = false;
    ground.debug = false;
  }
  
  function createBackground(){
    bg = createSprite(750, 200);
    bg.addImage(bgImg);
    bg.velocityX = -4;
  }