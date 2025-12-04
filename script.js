const container = document.getElementById("container");
let gridSizeInput = document.getElementById("gridSizeInput");
const submitButton = document.getElementById("submitButton");

gridSizeInput.focus();

submitButton.addEventListener("click", () => {
    const num = parseInt(gridSizeInput.value);
    if(num > 100) {
        alert("Sorry the number is too big");
    } else {

    createGrid(num);
    gridSizeInput.value = '';
}})

function createGrid (numSquaresPerSide) {
    container.innerHTML = "";
    gridSizeInput.focus();
    const totalSquares = numSquaresPerSide * numSquaresPerSide;
    const sizeOfDiv = 100 / numSquaresPerSide;

    for(let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.style.width = sizeOfDiv + '%';
        square.style.height = sizeOfDiv + '%';

        square.classList.add('grid-square');
        //square.addEventListener('mouseover', () => {
          //  square.style.backgroundColor = 'black';
       // } )
        function getRandomRgbColor() {
    // Generate a random integer between 0 and 255 for Red (R)
            const r = Math.floor(Math.random() * 256);
    
    // Generate a random integer between 0 and 255 for Green (G)
            const g = Math.floor(Math.random() * 256);
    
    // Generate a random integer between 0 and 255 for Blue (B)
            const b = Math.floor(Math.random() * 256);
    
    // Return the color formatted as a CSS RGB string
            return `rgb(${r}, ${g}, ${b})`;
        }

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomRgbColor();
        });
          //  square.style.backgroundColor = 'black';
        square.addEventListener('mouseout', () => {
            square.style.backgroundColor = 'white';
        })

        container.appendChild(square);
    }
}
