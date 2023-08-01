// create a grid of 16 x 16
let grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";
for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");

    // if hover over a square, change color
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue";
    });
    
    grid.append(square);
}