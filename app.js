function div16GridCreator (){
    const body = document.querySelector('#content');
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
    body.appendChild(gridDiv);

}

div16GridCreator();