const container = document.querySelector(".grid-container");
const gridContainer = document.querySelector(".js-container");


function generateSquare() {
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  gridSquare.style.backgroundColor = generateColor()
  container.appendChild(gridSquare)
}

gridContainer.addEventListener("mouseover", generateSquare);
/*
const gridSquare = document.createElement("div");
gridSquare.classList.add("grid-square");
gridSquare.style.backgroundColor = generateColor()

container.appendChild(gridSquare)

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
