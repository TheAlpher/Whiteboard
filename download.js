const download = document.querySelector(".download");
download.addEventListener("click", function(event) {
  event.preventDefault();
  const body = document.querySelector("body");
  const anchor = document.createElement("a");
  anchor.href = board.toDataURL();
  anchor.download = "image.png";
  anchor.click();
  body.appendChild(anchor);
  body.removeChild(anchor);
});
