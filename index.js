const canvas = document.querySelector("canvas");

// where variable c represents the context of the HTML canvas
// context being the object that represents the state of the canvas
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// setting background for the gamespace
c.fillStyle(black);
c.fillRect(0, 0, canvas.width, canvas.height);

// creating the user character (lil triangle guy)
class Player {
  constructor({ position, velocity }) {
    this.position = position; // {x, y}
    this.velocity = velocity;
  }

  draw() {
    c.moveTo(this.position.x + 30, this.position.y);
    c.lineTo(this.position.x - 10, this.position.y - 10);
    c.lineTo(this.position.x - 10, this.position.y + 10);
    c.closePath();

    c.strokeStyle = "white";
    c.stroke();
  }
}

const player = new Player({
  position: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
});

player.draw();

console.log(player);
