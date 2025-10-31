// remove divs

export default function gridReset(){
    const divBlocks = document.querySelectorAll('.div-block'); 

    divBlocks.forEach((el) => {
        el.remove();
    });

}