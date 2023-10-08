const canvas = document.querySelector("canvas");

// where variable c represents the context of the HTML canvas
// context being the object that represents the state of the canvas
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// setting background for the gamespace
c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height);

// initial values for triangle spaceship
class Player {
  constructor({ position, velocity }) {
    this.position = position; // {x, y}
    this.velocity = velocity;
  }

  draw() {
    c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, false);
    c.fillStyle = "red";
    c.fill();

    c.moveTo(this.position.x + 30, this.position.y);
    c.lineTo(this.position.x - 10, this.position.y - 10);
    c.lineTo(this.position.x - 10, this.position.y + 10);
    c.closePath();

    c.strokeStyle = "white";
    c.stroke();
  }
}

// setting initial player position
const player = new Player({
  position: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
});

player.draw();

const keys = {
  w: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);

  player.draw;

  if (keys.w.pressed) player.velocity.x = 1;
}

animate();

// functionality that listens for keyboard events
// the spaceship will move based upon these events
window.addEventListener("keydown", () => {
  switch (e.code) {
    case "KeyW":
      keys.w.pressed = true;
      break;
    case "KeyA":
      // logic for a key press
      break;
    case "KeyD":
      // logic for d key press
      break;
  }
  console.log(e);
});
