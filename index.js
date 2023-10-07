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
  constructor(position) {
    this.position = position; // {x, y}
    this.velocity = velocity;
  }
}

const player = new Player({ x: 0, y: 0 });
