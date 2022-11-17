let gridSize = 16;
let squaresAmount = gridSize * gridSize;
let isRainbowModeOn = false;
let buttonCounter = 1;

const gridContainer = document.querySelector(".grid-container");
const submitButton = document.querySelector("button");
const textBoxInput = document.querySelector("input");
const rainbowButton = document.querySelector(".multi-colour");


function createGrid(gridSize){
    let squaresAmount = gridSize * gridSize;

    for(let i = 0; i < squaresAmount; i++){
        const grid = document.createElement("div");
        gridContainer.appendChild(grid);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    let divsOnScreen = document.querySelectorAll(".grid-container div")

    divsOnScreen.forEach(grid => grid.addEventListener("mouseover", () => {
        if(isRainbowModeOn){
            grid.style.backgroundColor = genRandColour();
        } else{
            grid.style.backgroundColor = "black";
        }
    }));
}


submitButton.onclick = () => {
    if(textBoxInput.value >= 16 && textBoxInput.value <= 100){
        gridSize = textBoxInput.value;
        textBoxInput.value = "";
        clearGrid();
    }
}


rainbowButton.onclick = () => {
    buttonCounter ++;

    if(buttonCounter % 2 == 0){
        rainbowButton.classList.add("rainbow")
        isRainbowModeOn = true;
        clearGrid();
    } else{
        rainbowButton.classList.remove("rainbow")
        isRainbowModeOn = false;
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


function genRandColour(){
    let randomColour = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + randomColour.slice(0, 6);
}


createGrid(gridSize);