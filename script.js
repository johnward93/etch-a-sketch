const gridContainer = document.querySelector("#grid-container");
const userInput = prompt("How many rows?");
const numberRows = parseInt(userInput);
const numberDivs = numberRows * numberRows;
document.documentElement.style.setProperty("--divs-per-row", numberRows);

for (i = 0; i < numberDivs; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    gridContainer.appendChild(div);
}

const squareHover = document.querySelectorAll(".square");
squareHover.forEach((squareHoverEffect) => squareHoverEffect.addEventListener("mouseover",() => {
    squareHoverEffect.classList.add("square-hover");
}))