function Ball(x, y, size, color, velocity) {

  this.position = createVector(x, y);
  this.velocity = velocity;

  this.size = size;
  this.color = color;

  this.onScreen = true;
}

//draw ball
Ball.prototype.draw = function() {

  stroke(255);
  strokeWeight(3);
  fill(this.color);

  ellipse(this.position.x, this.position.y, this.size);
};

//position and onscreen value
Ball.prototype.update = function() {

  this.position.y += this.velocity;

  this.onScreen = (this.position.y < height);
};

//ball caught by the basket?
Ball.prototype.caughtBy = function(basket) {

  var leftX = basket.position.x - HALF_B_SIZE; // left-most X
  var rightX = basket.position.x + HALF_B_SIZE; // right-most X

  var topY = basket.position.y + HALF_B_SIZE; // top-most Y

  return !(this.position.x < leftX || this.position.x > rightX ||
    this.position.y < basket.position.y || this.position.y > topY);
};