const gridContainer = document.querySelector("#grid-container");
for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    gridContainer.appendChild(div);
}