const fileSelector = document.getElementById("fileSelector");
const fileInput = document.getElementById("fileInput");
fileSelector.addEventListener("click", function(event) {
  event.preventDefault();
  fileInput.click();
});


fileInput.addEventListener("change", function(event) {
  const body = document.querySelector("body");
  const file = event.currentTarget.files[0];
  console.log(event.currentTarget);
 
  const img = document.createElement("img");

  img.src = window.URL.createObjectURL(file);


  // load => DOM 
  img.onload=function(){
    window.URL.revokeObjectURL(this.src);
  }
  
  body.appendChild(img);
});
