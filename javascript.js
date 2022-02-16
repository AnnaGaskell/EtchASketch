//Create Div//
const container = document.querySelector("#container");


//Create Grid within new Div//

function createGrid(gridValue){
    for (let i = 0; i < gridValue * gridValue; i++){
        const content = document.createElement('div');
        content.classList.add('grid');
        container.appendChild(content); 
    }
}

createGrid(16);


//Select cells to change color with mouseover Hover//
let cells = document.querySelectorAll(".grid");
function blackColor(){
    this.style.backgroundColor = '#000000';
}
cells.forEach(cell => cell.addEventListener('mouseover', blackColor))



//Refresh Current Grid//
clearButton = document.querySelector('.refresh');
function refreshGrid(){
    window.location.reload();
}
clearButton.addEventListener('click', refreshGrid);



//Pixel Size with Prompt//
const sizeButton = document.querySelector(".size");
function changeGrid(){
    let newGrid = prompt("Enter Grid Size between 1 to 100")
    let newPixel = parseInt(newGrid);
    if (newPixel >= 1 && newPixel <= 100){
        gridValue = newPixel;
        createGrid();
    }else {
        alert("Enter a number from 1-100 range");
      }
}
sizeButton.addEventListener('click', changeGrid);




//Eraser//



//Bonus: Random Rainbow Value//
function changeColor(e) {
    const Color1 = Math.floor(Math.random() * 256);
    const Color2 = Math.floor(Math.random() * 256);
    const Color3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
  }
