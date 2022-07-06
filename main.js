'use strict';
const number = document.querySelector('.js_number');
const btn = document.querySelector('.js_btn');
const clue = document.querySelector('.js_clue');
const attemps = document.querySelector('.js_attemps');
let countClick = 0;
function getRandomNumber (max) {
    return Math.ceil(Math.random() * max);
}

const RandomNumber = getRandomNumber(100);
console.log(RandomNumber);

function handleClick (ev) {
    ev.preventDefault();
    const numberValue = number.value;
    countClick += 1;
    attemps.innerHTML = countClick;

    if (numberValue == RandomNumber) {
        clue.innerHTML = 'Has ganado campeona!!!';
    } else if (numberValue > RandomNumber && numberValue < 100) {
        clue.innerHTML = 'Demasiado alto.';
    } else if (numberValue < RandomNumber && numberValue > 0) {
        clue.innerHTML = 'Demasiado bajo.';
    } else {
        clue.innerHTML = 'El número debe estar entre 1 y 100.';
    }
}


btn.addEventListener('click', handleClick);
//console.log()