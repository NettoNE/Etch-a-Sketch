// put colors on grid blocks (mouseover)

const blue = "#AEC6CF";
const pink = "#FFB3C6";
const orange = "#FFDAB9";
const red = "#FFA07A";
const yellow = "#FFFACD";
const purple = "#B19CD9";

const colors = [blue, pink, orange, red, yellow, purple];

export default function gridSketch() {

    const divBlocks = document.querySelectorAll('.div-block');

    divBlocks.forEach((el) => {
        el.addEventListener('mouseover', () => {
            el.style.backgroundColor = randomColor();
        });
    });

}

function randomColor() {

    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
    
}
