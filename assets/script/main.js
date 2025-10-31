import gridDraw from "./gridDraw.js";
import gridReset from "./gridReset.js";

function main() {

    // container 
    const divContainer = document.querySelector('.container');
    
    // buttons
    const btnGridDraw = document.querySelector('#gridDraw');
    const btnGridReset = document.querySelector('#gridReset');

    // input 
    const gridInputSize = document.querySelector('#gridInput');

    // event handlers
    
    btnGridDraw.addEventListener('click', function () {
        gridDraw(divContainer, gridInputSize);
    });

    btnGridReset.addEventListener('click', function () {
        gridReset();
    });

}

document.addEventListener('DOMContentLoaded', main);