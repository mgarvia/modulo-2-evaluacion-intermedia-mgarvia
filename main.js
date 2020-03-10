'user strict';

const input = document.querySelector('#input');
const tryButton = document.querySelector('#button');
const tip = document.querySelector('#tip');
const counter = document.querySelector('#counter');

//Se genera un número aleatorio al arrancar el juego y se lanza por consola

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const aleatoryNumber = getRandomNumber(100);

console.log('número aleatorio:', aleatoryNumber);

//Función para probar si el número introducido es correcto

function tryNumber (event) {
    event.preventDefault()

    //Lanzar mensaje en función del número del input

    if (input.value > aleatoryNumber && input.value <= 100) {
        tip.innerHTML = 'Demasiado alto'
    } else if (input.value < aleatoryNumber && input.value > 0) {
        tip.innerHTML = 'Demasiado bajo'
    } else if (input.value == aleatoryNumber) {
        tip.innerHTML = 'Has ganado campeona!!!'
    } else if (input.value > 100 || input.value === NaN || input.value == 0) {
        tip.innerHTML = 'El número debe estar entre 1 y 100'
    }

    //Incrementar el contador con cada intento

    counter.innerHTML = parseInt(counter.innerHTML) + 1;

}

tryButton.addEventListener('click', tryNumber);