//Create  grid. Expects a gridLength of 1 to 100 inclusive.
function divGridCreator (gridLength){
    const content = document.querySelector('#content');
    const gridDiv = document.createElement('div');
    let gridSize = gridLength*gridLength;

    gridDiv.setAttribute('id', 'gridDiv'); 
    gridDiv.style.gridTemplateColumns = `repeat(${gridLength}, 1fr [col-start])`;
    gridDiv.style.gridTemplateRows = `repeat(${gridLength}, 1fr [row-start])`;

    //Grid Maker
    for (let i = 1; i <= gridSize; i++){
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridSquare');
        gridBox.setAttribute('id',`grid${i}`);
        gridDiv.appendChild(gridBox);
    }
    content.appendChild(gridDiv);

}

divGridCreator(16);

//Grid Hover Event Listener - change grid square color when mouseover occurs.
document.querySelector('#content').addEventListener('mouseover', function(e){
    if(e.target){
        if(e.target.classList.contains('gridSquare')){
            e.target.style.backgroundColor = "black";
            opacitySet(e);
        }
    }
} );

//Set the opacity of the grid square (allows shading)
function opacitySet(e){
    if(e.target.style.opacity === ""){
        e.target.style.opacity = 0.2;
    } else if(parseInt(e.target.style.opacity) < 1){
        e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.2;
    }
}

document.querySelector('#resetBtn').addEventListener('click', resetGame);
document.querySelector('#gridBtn').addEventListener('click', resizeGrid);

//Resets the grid canvas to a clean slate (with whatever grid size was used last)
function resetGame(){
    Array.from(document.querySelectorAll('.gridSquare')).forEach((e) => e.style = 'white');
}

//Resize grid canvas. Minimum is 1x1 and Largest is 100x100 grid.
function resizeGrid(){
    let gridLength = prompt('Enter a Grid Length Between 1 and 100');
    let content = document.querySelector('#content');
    content.removeChild(content.firstChild);
    if (gridLength <= 100 && gridLength > 0){
        divGridCreator(gridLength);
    } else { //default size
        alert("INVALID SIZE! Grid Length Set to 16");
        divGridCreator(16);
    }
}
