//Default//
let color = 'black';
let click = true;
let input = 16

document.querySelector("body").addEventListener('click', () => {
  click = !click;
})

function setupGrid(input) {
  let board = document.querySelector(".board")

  board.style.gridTemplateColumns = `repeat(${input}, 1fr)`
  board.style.gridTemplateRows = `repeat(${input}, 1fr)`

  for (let i = 0; i < input * input; i++) {
    let square = document.createElement("div");
    square.classList.add("pixel")
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    board.appendChild(square);
  }
}

setupGrid(input);

function changeSize(input){
  if (input >= 2 && input <=100){
    resetBoard();
    setupGrid(input);
  } else {
    alert("Choose an input between 2 and 100")
  }
}

function colorSquare(){
  if (click) {
    if (color === "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice){
  color = choice
}

function resetBoard(){
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div")
  squares.forEach((div) => div.remove());
}
