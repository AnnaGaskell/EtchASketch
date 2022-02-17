//Defaults//
let currentMode = 'draw'
let currentSize = 16

window.onload = () => {
    setupGrid(currentSize)
    activateButton(currentMode)
  }

//Button Values & Events//

const drawBtn = document.getElementById('drawBtn')
const clearBtn = document.getElementById('clearBtn')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const grid = document.getElementById('grid')

drawBtn.onclick = () => setCurrentMode('draw')
clearBtn.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//Activations//

function freshGrid(e) {
    if (e.type === 'mouseover' && !mouseDown) return
      else if (currentMode === 'draw') {
      e.target.style.backgroundColor = 'black'
    } else if (reloadGrid()) {
      e.target.style.backgroundColor = '#fefefe'
    }
  }
  
function activateButton() {
    if (currentMode === 'draw') {
      drawBtn.classList.remove('active')
    } else if (currentMode === reloadGrid()) {
      clearBtn.classList.remove('active')
    }
  }


// GRID with use prompt (slider style) //

function setCurrentSize(newSize) {
    currentSize = newSize
  }

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
  clearGrid()
  setupGrid(currentSize)
}

function clearGrid() {
  grid.innerHTML = ''
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add("grid-element")
    gridElement.addEventListener('mouseover', freshGrid)
    gridElement.addEventListener('mousedown', freshGrid)
    grid.appendChild(gridElement)
  }
}
