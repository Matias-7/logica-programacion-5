
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = [];

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsDiv = document.getElementById('attempts');
    
    
    const userGuess = Number(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }
    
    attempts.push(userGuess);
    
    if (userGuess === secretNumber) {
        message.textContent = "¡Felicidades, adivinaste el número secreto!";
        attemptsDiv.textContent = "Números introducidos: " + attempts.join(", ");
        guessInput.disabled = true;
    } else {
        message.textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
        guessInput.value = "";
        guessInput.focus();
    }
}

document.getElementById('guessInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});


