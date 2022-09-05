function div16GridCreator (){
    const content = document.querySelector('#content');
    const gridDiv = document.createElement('div');

    gridDiv.setAttribute('id', 'gridDiv'); 

    //16x16 grid
    for (let i = 1; i <= 256; i++){
        const gridBox = document.createElement('div');
    
        gridBox.setAttribute('background-color', 'red');
        gridBox.classList.add('gridSquare');
        gridBox.setAttribute('id',`grid${i}`);
        gridDiv.appendChild(gridBox);
    }
    content.appendChild(gridDiv);

}

div16GridCreator();

//Div Hover Event Listener
document.querySelector('#content').addEventListener('mouseover', function(e){
    if(e.target){
        if(e.target.classList.contains('gridSquare')){
            e.target.classList.add('etchColor');
        }
    }
} );