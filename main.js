'use strict';
const number = document.querySelector('.js_number');
const btn = document.querySelector('.js_btn');
const clue = document.querySelector('.js_clue');
const attemps = document.querySelector('.js_attemps');
let countClick = 0;


function getRandomNumber (max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function checkNumber () {
    const numberValue = parseInt(number.value);

    if (isNaN(numberValue)) {
        clue.innerHTML = 'El número debe estar entre 1 y 100.';
    }
    if (numberValue === randomNumber) {
        clue.innerHTML = 'Has ganado campeona!!!';
    } else if (numberValue > randomNumber && numberValue < 100) {
        clue.innerHTML = 'Demasiado alto.';
    } else if (numberValue < randomNumber && numberValue > 0) {
        clue.innerHTML = 'Demasiado bajo.';
    } else {
        clue.innerHTML = 'El número debe estar entre 1 y 100.';
    }
}

function incrementCounter () {
    countClick++;
    attemps.innerHTML = countClick;
}

function handleClick (ev) {
    ev.preventDefault();
    checkNumber();
    count();

}


btn.addEventListener('click', handleClick);
//console.log()