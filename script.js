const container = document.querySelector(".grid-container");
const generateBtn = document.querySelector(".test-btn")


function generateSquare() {
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  gridSquare.style.backgroundColor = generateColor()
  container.appendChild(gridSquare)
}

generateBtn.addEventListener("click", generateSquare)
/*
const gridSquare = document.createElement("div");
gridSquare.classList.add("grid-square");
gridSquare.style.backgroundColor = generateColor()

container.appendChild(gridSquare)
*/

function generateColor(){
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let code = "";
  for(let i=0; i<6; i++){
   code += hexArray[Math.floor(Math.random()*16)];
  }
  return `#${code}`
 }
