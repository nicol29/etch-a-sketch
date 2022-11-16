let gridSize = 16;
let squaresAmount = gridSize * gridSize;

const gridContainer = document.querySelector(".grid-container");
const submitButton = document.querySelector("button");
let textBoxInput = document.querySelector("input");


function createGrid(gridSize){
    let squaresAmount = gridSize * gridSize;

    for(let i = 0; i < squaresAmount; i++){
        const grid = document.createElement("div");
        gridContainer.appendChild(grid);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    let divsOnScreen = document.querySelectorAll(".grid-container div")

    divsOnScreen.forEach(grid => grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "black";
    }));
}


submitButton.onclick = () => {
    if(textBoxInput.value){
        let newGridSize = textBoxInput.value;
        gridSize = newGridSize;
        clearGrid();
    }
}


function clearGrid(){
    divsOnScreen = document.querySelectorAll(".grid-container div");

    if(gridContainer.hasChildNodes()) {
        divsOnScreen.forEach(div => gridContainer.removeChild(div));
    }

    createGrid(gridSize);
}


createGrid(gridSize);