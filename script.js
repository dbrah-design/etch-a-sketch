const gridContainer = document.querySelector(".js-container");

function createSquare() {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridContainer.appendChild(gridSquare);
}

function generateGrid() {
  for( i = 0; i < 256; i++) {
     createSquare()
  }
}
generateGrid()


/* Way to add random color

gridSquare.style.backgroundColor = generateColor()


*/
// Potential way to get hover effect
  // object.addEventListener("mouseover", myScript);

function generateColor(){
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let code = "";
  for(let i=0; i<6; i++){
   code += hexArray[Math.floor(Math.random()*16)];
  }
  return `#${code}`
 }
