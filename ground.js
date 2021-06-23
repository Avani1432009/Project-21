groundObj.display();
ground = Bodies.rectangle(200,380,400,20,options);
World.add(world,ground);
fill ("white");

ground1 = Bodies.rectangle(350,380,400,20,options);
World.add(world,ground1);
fill("white");

ground2 = Bodies.rectangle(350,380,400,20,options);
World.add(world,ground2);
fill("white");

rightSide = new ground(700,670,10,20);
leftSide = new ground(400,600,20,120); 

stokeWeight(0);
stoke(225);
fill("white");
//rect(ground.position.x,ground.position.y,700,20);
//rect(rightSide.position.x,rightSide.position.y,10,20);
//rect(leftSide.position.x,leftSide.position.y,10,20);







