
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 30);

  for (let i = particles.length - 1; i >= 0; i--) {

    particles[i].update();
    particles[i].display();

    if (particles[i].life < 0) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {

  for (let i = 0; i < 150; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {

  constructor(x, y) {

    this.x = x;
    this.y = y;

    this.size = random(4, 12);

    this.speedX = random(-10, 10);
    this.speedY = random(-10, 10);

    this.life = 255;
  }

  update() {

    this.x += this.speedX;
    this.y += this.speedY;

    this.life -= 5;
  }

  display() {

    noStroke();

    fill(
      random(100,255),
      random(100,255),
      random(100,255),
      this.life
    );

    circle(this.x, this.y, this.size);
  }
}
