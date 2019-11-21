// var activeTool="pencil"
var activeTool = "pencil";
var currentOptions = ".pencil-options";
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
var eraser = document.querySelector(".eraser");
var pencil = document.querySelector(".pencil");
var pencilOptions = document.querySelector(".pencil-options");
var eraserOptions = document.querySelector(".eraser-options");

function handletoolChange(tool) {
  if (tool == "eraser") {
    if (activeTool == "eraser") {
      eraserOptions.classList.toggle("show");
      // pencilOptions.classList.remove("show");
      // currentOptions=".eraser-options"
    } else {
      // activeTool = "eraser";
      eraser.classList.add("active");
      pencil.classList.remove("active");
      pencilOptions.classList.remove("show");
      ctx.strokeStyle = "white";
      activeTool = "eraser";
    }
  } else if (tool == "pencil") {
    // activeTool = "pen";
    if (activeTool == "pencil") {
      pencilOptions.classList.toggle("show");
    } else {
      pencil.classList.add("active");
      eraser.classList.remove("active");
      eraserOptions.classList.remove("show");
      ctx.strokeStyle = "red";
      activeTool = "pencil";
    }
  } 
  else
  {
    pencil.classList.add("active");
    eraser.classList.remove("active");
    eraserOptions.classList.remove("show");
    pencilOptions.classList.remove("show");
  }
}

function changeSize(value) {
  ctx.lineWidth = value;
}
function handleColorChange(value){
  ctx.strokeStyle=value;
}