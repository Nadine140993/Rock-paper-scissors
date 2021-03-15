const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        const playButton = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const matchScreen = document.querySelector('.match')

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn')
        })
    }

    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        const hands = document.querySelectorAll ('.hands img')

        hands.forEach(hand => {
            hand.addEventListener ('animationend', function() {
                this.style.animation = '';
            })
        })

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach (options => {
            options.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout (() => {

                    compareHands(this.textContent, computerChoice);

             playerHand.src = `./${this.textContent}.png`;
            computerHand.src = `./${computerChoice}.png`;

                
                }, 2000)
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        }) 
    }

    const updateScore = () => {

        const pScore = document.querySelector('.player-score p')
        const cScore = document.querySelector('.computer-score p')

        pScore.textContent = playerScore;
        cScore.textContent = computerScore;

    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
    if (playerChoice === computerChoice) {
        winner.textContent = 'It is a tie';
        return;
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            winner.textContent = 'Player Wins'
            playerScore++
            updateScore();
        }
        else {
            winner.textContent = 'Computer Wins'
            computerScore++
            updateScore();
            return;
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            winner.textContent = 'Computer Wins'
            computerScore++
            updateScore();
        }
        else {
            winner.textContent = 'Player Wins'
            playerScore++
            updateScore();
            return;
        }
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            winner.textContent = 'Computer Wins'
            computerScore++
            updateScore();
        }
        else {
            winner.textContent = 'Player Wins'
            playerScore++
            updateScore();
            return;
        }
    }

    if (playerScore === 10) {
        winner.textContent = 'Game Over. Player Won'
        updateScore();
        playerScore = 0;
        computerScore = 0;
        return;
    }

    else if (computerScore === 10) {
        winner.textContent = 'Game Over. Computer Won'
        updateScore();
        playerScore = 0;
        computerScore = 0;
        return;
    }
    }


    startGame();
    playMatch();
}

game();
