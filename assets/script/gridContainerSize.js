// calculates and sets the size of each grid block

export default function gridContainerSize(gridSize, divBlock) {

    // total container size (px)
    const containerSize = 800;

    // size (width/height) of each square

    const blockSize = containerSize / gridSize;

    divBlock.style.height = `${blockSize}px`;
    divBlock.style.width = `${blockSize}px`;

}




