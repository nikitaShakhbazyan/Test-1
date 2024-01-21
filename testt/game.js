const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber)

let attempts = 10;

while (0 < attempts) {
    const guest = prompt('Guess the number')

    if (parseInt(guest) === secretNumber) {
        alert("Congratulations! you won the gamee!")
        break;
    } else {
        attempts--
        alert(`The guest number is not correct, ${attempts} attempt-s left, ${guest < secretNumber ? 'Too low!' : 'Too high!'}`)

    }
}

if (attempts === 0) {
    alert("Attempt is 0 , you have lost!!!!")
}