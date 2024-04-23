const gridContainer = document.querySelector(".js-container");
const gridBtn = document.querySelector(".grid-btn");

function generateGrid(size) {
  gridContainer.replaceChildren()
  
  for( i = 0; i < size * size; i++) {
    const squareLength = (500 - 2 * 2) / size;
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.width = `${squareLength}px`
    div.style.height = `${squareLength}px`
    gridContainer.appendChild(div);
  }

  const gridSquares = document.querySelectorAll(".grid-square");

  gridSquares.forEach((square) => {
  
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = generateColor()
    });
  
  });
}

generateGrid(16)

gridBtn.addEventListener("click", () => {
  const squaresPerSide = prompt("How many number of squares per side? Choose a number between 2 to 100.");
  if(squaresPerSide > 100 || squaresPerSide < 2) {
    alert("Number not valid. Please enter a number between 2 to 100.")
  } else {
    generateGrid(squaresPerSide)
  }
  
})

function generateColor(){
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let code = "";
  for(let i=0; i<6; i++){
   code += hexArray[Math.floor(Math.random()*16)];
  }
  return `#${code}`
 }
