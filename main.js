'user strict';

const input = document.querySelector('#input');
const tryButton = document.querySelector('#button');
const tip = document.querySelector('#tip');
const counter = document.querySelector('#counter');
const tipBox = document.querySelector('.tip__box');

//Se genera un número aleatorio al arrancar el juego y se lanza por consola

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const aleatoryNumber = getRandomNumber(100);

console.log('número aleatorio:', aleatoryNumber);


//Función para probar si el número introducido es correcto

function tryNumber (event) {
    event.preventDefault()
    let userNumber = parseInt(input.value)


    //Lanzar mensaje en función del número del input

    if (userNumber > aleatoryNumber && userNumber <= 100) {
        tip.innerHTML = 'Demasiado alto';
        tip.classList.add('playing');
        tipBox.classList.remove('winner');
    } else if (userNumber < aleatoryNumber && userNumber > 0) {
        tip.innerHTML = 'Demasiado bajo'
        tip.classList.add('playing');
        tipBox.classList.remove('winner');
    } else if (userNumber === aleatoryNumber) {
        tip.innerHTML = '¡¡¡Has ganado campeona!!!';
        tip.classList.remove('playing');
        tipBox.classList.add('winner');
    } else if (userNumber > 100 || userNumber === 0) {
        tip.innerHTML = 'El número debe estar entre 1 y 100'
        tip.classList.add('playing');
        tipBox.classList.remove('winner');
    } else if (userNumber !== Number) {
        tip.innerHTML = 'Eso ni siquiera es un número ;)'
        tip.classList.add('playing');
        tipBox.classList.remove('winner');
    }


    //Incrementar el contador con cada intento

    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

tryButton.addEventListener('click', tryNumber);