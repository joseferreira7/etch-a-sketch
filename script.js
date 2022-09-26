const grid = document.querySelector('#grid');

let cells;

function drawGrid(max){
    for (let i = 0; i < max; i++) {

        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < max; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');

            if (i == 0) cell.classList.add('top-row');
            if (i == max - 1) cell.classList.add('bot-row');
            if (j == 0) cell.classList.add('first-col');
            if (j == max - 1) cell.classList.add('last-col');

            row.append(cell);
        }

        grid.append(row);
    }

    cells = document.querySelectorAll('.cell');

}

drawGrid(10);

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', 'background-color: black; border-color: black');
    });
});

const sizeSelector = document.querySelector('#size-selector');

sizeSelector.addEventListener('click', () => {
    let max = 10;
    
    max = prompt('Select a grid size');
    while (max >= 100) {
        alert('Too high, select a grid size less than 100');
        max = prompt('Select a grid size');
    }
    
    if (max <= 0) max = 10;

    while (grid.hasChildNodes()) grid.removeChild(grid.lastChild);
    drawGrid(max);

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', 'background-color: black; border-color: black');
        });
    });

});