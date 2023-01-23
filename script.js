const container = document.querySelector('.container');
let divArray = [];

for (let i = 0; i < 2775; i++) {
    divArray[i] = document.createElement('div');
    divArray[i].classList.add('colorbox');
    container.appendChild(divArray[i]);
    divArray[i].addEventListener('mouseover', () => { 
        changeColor(i);
    });
}

function changeColor(i) {
    divArray[i].style.cssText = "background-color: black;"
}