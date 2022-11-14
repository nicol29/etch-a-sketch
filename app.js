let gridSize = 16;
let squaresAmount = gridSize * gridSize;

const gridContainer = document.querySelector(".grid-container");

for(let i = 0; i < squaresAmount; i++){
    const grid = document.createElement("div");
    gridContainer.appendChild(grid);
}

let divsOnScreen = document.querySelectorAll(".grid-container div")

gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;


divsOnScreen.forEach(grid => grid.addEventListener("mouseover", (e) => {
    console.log(e);
    grid.style.backgroundColor = "blue";
}));