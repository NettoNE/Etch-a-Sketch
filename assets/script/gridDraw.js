// draw grid blocks

import gridContainerSize from "./gridContainerSize.js";
import gridReset from "./gridReset.js";
import gridSketch from "./gridSketch.js"

export default function (divContainer, gridInputSize) {

    // define dimension
    const gridSize = +gridInputSize.value;
    const gridDimension = gridSize * gridSize;

    // check gridInputSize

    const isGridSizeValid = gridSizeCheck(gridSize);

    if (!isGridSizeValid) {
        alert("Invalid! '1' to '100' ONLY.");
        return;
    }

    // cleaning previous grid...
    gridReset();

    // creating divs...
    for (let i = 0; i < gridDimension; i++) {
        const divBlock = document.createElement("div");

        divBlock.classList.add('div-block');

        divContainer.appendChild(divBlock);

        // define container size
        gridContainerSize(gridSize, divBlock);
    }

    // add colors (mouseover)
    gridSketch();

}

function gridSizeCheck(gridSize) {

    if (typeof gridSize !== "number" || Number.isNaN(gridSize)) {
        return false;
    }

    if (gridSize < 1 || gridSize > 100) {
        return false;
    }

    return true;

}


