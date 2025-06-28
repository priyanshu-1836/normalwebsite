const canvas = document.getElementById("flappyCanvas");
const ctx = canvas.getContext("2d");

let frames = 0;
let gravity = 0.25;
let jump = 4.6;
let bird = {
  x: 50, y: 150, w: 20, h: 20, velocity: 0,
  draw: function () {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  },
  update: function () {
    this.velocity += gravity;
    this.y += this.velocity;
    if (this.y + this.h > canvas.height) {
      this.y = 150;
      this.velocity = 0;
    }
  },
  flap: function () {
    this.velocity = -jump;
  }
};

document.addEventListener("keydown", function () {
  bird.flap();
});

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bird.update();
  bird.draw();
  frames++;
  requestAnimationFrame(loop);
}

loop();
