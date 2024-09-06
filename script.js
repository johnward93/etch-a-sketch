const gridContainer = document.querySelector("#grid-container");
// const userInput = prompt("How many rows?");
// const numberRows = parseInt(userInput);
// const numberDivs = numberRows * numberRows;
// document.documentElement.style.setProperty("--divs-per-row", numberRows);

function addHoverEffectListener() {
    const squareHover = document.querySelectorAll(".square");
    squareHover.forEach((squareHoverEffect) => squareHoverEffect.addEventListener("mouseover", () => {
        squareHoverEffect.classList.add("square-hover");
    }))
    return;
}

function createDivs(numberProvidedByUser) {
    for (i = 0; i < numberProvidedByUser * numberProvidedByUser; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        gridContainer.appendChild(div);
    }
    document.documentElement.style.setProperty("--divs-per-row", numberProvidedByUser);
    addHoverEffectListener();
    return;
}

function refreshGrid() {
    const userInput = prompt("How many rows?");
    const numberRows = parseInt(userInput);
    const squareDelete = document.querySelectorAll(".square");
    squareDelete.forEach((divDelete) => divDelete.remove())
    createDivs(numberRows);
    return;
}
createDivs(16);