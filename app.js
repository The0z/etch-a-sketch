function divGridCreator (gridLength){
    const content = document.querySelector('#content');
    const gridDiv = document.createElement('div');
    let gridSize = gridLength*gridLength;

    gridDiv.setAttribute('id', 'gridDiv'); 

    //16x16 grid
    for (let i = 1; i <= gridSize; i++){
        const gridBox = document.createElement('div');
    
        gridBox.setAttribute('background-color', 'red');
        gridBox.classList.add('gridSquare');
        gridBox.setAttribute('id',`grid${i}`);
        gridDiv.appendChild(gridBox);
    }
    content.appendChild(gridDiv);

}

divGridCreator(16);

//Div Hover Event Listener
document.querySelector('#content').addEventListener('mouseover', function(e){
    if(e.target){
        if(e.target.classList.contains('gridSquare')){
            e.target.classList.add('etchColor');
        }
    }
} );

document.querySelector('#resetBtn').addEventListener('click', resetGame);

function resetGame(){
    Array.from(document.querySelectorAll('.gridSquare')).forEach((e) => e.classList.remove('etchColor'));
}
