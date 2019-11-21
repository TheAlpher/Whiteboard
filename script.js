// var pencil = document.querySelector(".pencil");
// mousedown
// mousemove
// mouseup
var isDown = false;
const undoStack = [];
const redoStack = [];
const undo = document.querySelector(".undo");
const redo = document.querySelector(".redo");
board.addEventListener("mousedown", function(event) {
  var { x, y } = getLocation(event);
  ctx.beginPath();
  ctx.moveTo(x, y);
  isDown = true;

  const point = {
    x,
    y,
    effect: ctx.globalCompositeOperation,
    color: ctx.strokeStyle,
    width: ctx.lineWidth,
    type: "begin"
  };
  undoStack.push(point);
});

board.addEventListener("mousemove", function(event) {
  if (!isDown) return;
  var { x, y } = getLocation(event);
  ctx.lineTo(x, y);
  ctx.stroke();
  
  const point = {
    x,
    y,
    effect: ctx.globalCompositeOperation,
    color: ctx.strokeStyle,
    width: ctx.lineWidth,
    type: "end"
  };

  undoStack.push(point);
});
board.addEventListener("mouseup", function() {
  isDown = false;
});
function getLocation(event) {
  console.log(board.getBoundingClientRect());
  console.log(event.clientY);
  return {
    x: event.clientX - board.getBoundingClientRect().left,

    y: event.clientY - board.getBoundingClientRect().top
  };
}
let interval = null;


undo.addEventListener("mousedown", function() {
  interval = window.setInterval(function() {
    if (undoStack.length <= 0) return;
    redoStack.push(undoStack.pop());
    redraw();
  }, 50);
});

undo.addEventListener("mouseup", function() {
  clearInterval(interval);
  interval = null;
});

redo.addEventListener("mousedown", function() {
  interval = window.setInterval(function() {
    if (redoStack.length < 0) return;
    undoStack.push(redoStack.pop());
    redraw();
  }, 50);
});
redo.addEventListener("mouseup", function() {
  clearInterval(interval);
  interval = null;
});
function redraw() {
  if (undoStack.length <= 0) return;
  ctx.clearRect(0, 0, board.width, board.height);
  for (let i = 0; i < undoStack.length; i++) {
    if (!undoStack[i]) return;
    let { x, y, effect, color, width, type } = undoStack[i];
    if (type === "begin") {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.globalCompositeOperation = effect;
      ctx.beginPath();
      ctx.moveTo(x, y);
      // mouse down
    } else if (type === "end") {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.globalCompositeOperation = effect;
      ctx.lineTo(x, y);
      ctx.stroke();
      // mouse move
    }
  }
}
