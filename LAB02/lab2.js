const prompt = require('prompt');

const choices = ['ROCK', 'PAPER', 'SCISSORS'];

prompt.start();

function playGame() {
    prompt.get(
        {
            name: 'userSelection',
            description: 'Choose ROCK, PAPER, or SCISSORS',
            required: true
        },
        function (err, result) {
            if (err) {
                console.error('Error:', err);
                return;
            }

            let userSelection = result.userSelection.toUpperCase();

            if (!choices.includes(userSelection)) {
                console.log("Invalid input. Please choose ROCK, PAPER, or SCISSORS.");
                return askToContinue();
            }

            const random = Math.random();
            let computerSelection = '';
            if (random <= 0.34) {
                computerSelection = 'PAPER';
            } else if (random <= 0.67) {
                computerSelection = 'SCISSORS';
            } else {
                computerSelection = 'ROCK';
            }

            console.log(`User selection: ${userSelection}`);
            console.log(`Computer selection: ${computerSelection}`);

            if (userSelection === computerSelection) {
                console.log("It's a tie");
            } else if (
                (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
                (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
                (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
            ) {
                console.log("User Wins");
            } else {
                console.log("Computer Wins");
            }

            askToContinue();
        }
    );
}

function askToContinue() {
    prompt.get(
        {
            name: 'playAgain',
            description: 'Play again? (y/n)',
            required: true
        },
        function (err, result) {
            if (err) {
                console.error('Error:', err);
                return;
            }

            const response = result.playAgain.toLowerCase();
            if (response === 'y' || response === 'yes') {
                playGame();
            } else {
                console.log("nThanks for playing!");
            }
        }
    );
}

// Start the game
playGame();
