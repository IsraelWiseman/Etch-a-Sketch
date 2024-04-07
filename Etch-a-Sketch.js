const gridContainer = document.querySelector('.grid-container');
let isDrawing = false;


function createGrid(size) {


    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.backgroundColor = getRandomColor();
        gridContainer.appendChild(square);
        square.style.width = `calc(100%/${size})`;
        square.style.height = `calc(100%/${size})`;

        square.addEventListener('mousedown', () => {
            isDrawing = true;
            square.style.backgroundColor = 'black';
        });

        square.addEventListener('mouseenter', () => {
            if (isDrawing) {
                square.style.backgroundColor = 'black';

            }
        });

        square.addEventListener('mouseup', () => {
            isDrawing = false;
        })
    }


}

const newGridBtn = document.querySelector('.new-grid');
newGridBtn.addEventListener('click', () => {
    gridContainer.textContent = '';

    let input = Number(prompt('Please enter size for new grid between 2 and 100.'));

    while (input < 2 || input > 100 || isNaN(input)) {
        input = Number(prompt('Please enter size for new grid between 2 and 100.'));
    }
    createGrid(input);



});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 255);
    
   

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}




createGrid(16);

