/* Gamelet : A Ball Game for begginers for moving Ball */
const ball = document.getElementById("ball"); // Get the ball
document.addEventListener("keydown", handleKeyPress); //Listen for keys
let position = 0; //initial Position

/** handle key press Respont to certain key pressed */

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (e.code === "ArrowDown") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // Update the ball position
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = position + "px"; //For Vertical Movement of the ball
}
