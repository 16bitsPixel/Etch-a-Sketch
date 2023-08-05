// create a grid of 16 x 16
let grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";
for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.classList.add("pixel");
    //square.style.border = "1px dashed black";

    // if hover over a square, change color
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = colorValue;
    });
    
    grid.append(square);
}

// color picker
let colorPicker = document.querySelector(".colorPicker");
let color = document.querySelector(".colors");
let colorValue = "black";
colorPicker.addEventListener("change", () => {
    color.style.backgroundColor = colorPicker.value;
    colorValue = colorPicker.value;
});

// clear grid button
document.querySelector(".clearButton").addEventListener("click", clearGrid);

// clear grid function
function clearGrid() {
    let pixels = Array.from(document.querySelectorAll(".pixel"));
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");
}