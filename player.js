const B_SIZE = 50;
const HALF_B_SIZE = B_SIZE / 2;
var basket=100; // player
var orbs = []; // falling Balls
var cnv;
var width1=500;
var score;
var time;
function setup() {

  cnv=createCanvas(500, 650);
  cnv.position(430,18);

  basket = new Basket(width / 2, height - B_SIZE);
  time=0;
  score = 0;
  textAlign(CENTER);
}
   function draw() {

  background(51);
   timer();
	handleOrbs();
  attemptNewOrb(frameCount);

	basket.update(mouseX);
	basket.draw();
  // drawScore();
}

function handleOrbs() {
  
	for (var i = orbs.length - 1; i >= 0; i--) {

		// loop through all orbs
    if (orbs[i].onScreen) {
      orbs[i].update();
      orbs[i].draw();
         
      if (orbs[i].caughtBy(basket)) {
          // resizeCanvas(width1, 600);
         
          score += 10;
				  basket.catch(orbs[i]);
          orbs.splice(i, 1);
          width1=width1-20  ; 
          resizeCanvas(width1, 600);
          console.log(width1);
          if (width1 == 100){
            resizeCanvas(400, 600);
            break;
          }
      }
    }
    else{
      if(width1 == 100){
        endGame();
      }
    } 
  }
}
 
function attemptNewOrb(frame) {

	if (frame % 20 === 0) { 

		var chance = map(score, 0, 100, 0.25, 0.99);
		if (random() < chance) {
			
			//draw ball
			var color = randomColor();
			var size = random(20) + 15;
			var velocity = random(10) + 10;
			var orb = new Ball(random(width), 0, size, color, velocity);
			orbs.push(orb);
        var color = randomColor1();
        var orb1 = new Ball(random(width), 0, size, color, velocity+2);
          orbs.push(orb1);
		}
	}
}

function timer(){
   var timeleft = 0;
          var downloadTimer = setInterval(function(){
              timeleft += 1;
              time=timeleft;
            },1000);
            
  textSize(40);
  noStroke();
  fill(255);
  text(time, width / 2, 100);
}
//score
function drawScore() {
  textSize(40);
  noStroke();
  fill(255);
  text(score, width / 2, 50);
}

//game over
function endGame() {
  textSize(60);
  noStroke();
  fill(255);
  noLoop();
  text("Game Over!", width/2, height / 2);
  
  
}

//random colour
function randomColor() { 
  return color(255,0,0);
}
function randomColor1() { 
  return color(255,255,0);
}