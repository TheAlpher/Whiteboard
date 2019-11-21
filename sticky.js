let flag = false;
let parent;
const sticky = document.querySelector(".sticky");
sticky.addEventListener("click", createSticky);
function createSticky() {
  const body = document.querySelector("body");
  const StickyPad = document.createElement("div");
  const writingPad = document.createElement("div");
  const textarea = document.createElement("textarea");
  const close = document.createElement("div");
  const minimize = document.createElement("div");
  const nav = document.createElement("div");

  StickyPad.setAttribute("class", "sticky-pad");
  close.setAttribute("class", "close");
  minimize.setAttribute("class", "minimize");
  writingPad.setAttribute("class", "writing-pad");
  nav.setAttribute("class", "nav");
  //  nav.style.backgroundColor="red";
  body.appendChild(StickyPad);
  StickyPad.appendChild(nav);
  StickyPad.appendChild(writingPad);
  nav.appendChild(close);
  nav.appendChild(minimize);
  writingPad.appendChild(textarea);


  minimize.addEventListener("click", function() {
    if (!flag) {
      writingPad.style.display = "none";
      flag = true;
    } else {
      writingPad.style.display = "block";
      flag = false;
    }
  });

  close.addEventListener("click", function() {
    body.removeChild(StickyPad);
  });
  StickyPad.addEventListener("mousedown", onmousedown);
  parent = StickyPad;
}
let initialX = null;
let initialY = null;
let isStickyDown = false;
// let isDown=false;
function onmousedown(event) {
  // // console.log(event.currentTarget);
  // console.log("Target");
  // console.log(event.target);
  // console.log(" current Target");
  // console.log(event.currentTarget);
  initialX = event.clientX;
  initialY = event.clientY;
  // isStickyDown = true;
  parent.addEventListener("mousemove", onmousemove);
  parent.addEventListener("mouseup", onmouseup);
 
}
function onmousemove(event) {
  // if (!isStickyDown) return;
  // console.log("mousemove");
  const stickyPad = event.currentTarget;
  let finalX = event.clientX;
  let finalY = event.clientY;
  let distX = finalX - initialX;
  let distY = finalY - initialY;
  // console.log(stickyPad.getBoundingClientRect());
  let { top, left } = stickyPad.getBoundingClientRect();
  stickyPad.style.top = top + distY + "px";
  stickyPad.style.left = left + distX + "px";
  initialX = finalX;
  initialY = finalY;
}
function onmouseup(event) {
  console.log("I was called");
  event.currentTarget.removeEventListener("mousemove", onmousemove);
  // isStickyDown = false;
}
