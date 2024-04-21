const gridContainer = document.querySelector(".js-container");
const gridBtn = document.querySelector(".grid-btn");
gridBtn.addEventListener("click", () => {
  const test = prompt("Enter Something");
  console.log(test)

})

function createSquare(square) {
    const squareLength = (500 - 2 * 2) / square;
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.width = `${squareLength}px`
    div.style.height = `${squareLength}px`
    gridContainer.appendChild(div);
}

function generateGrid(size) {
  for( i = 0; i < size; i++) {
     createSquare(16)
  }
}
generateGrid(256)

const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((square) => {
  
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = generateColor()
  });
  
});

/* It seems when I console.log here the grids have been created already so I get something in console instead of null.

const colorChange = document.querySelector(".grid-square");
console.log(colorChange);
*/

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
