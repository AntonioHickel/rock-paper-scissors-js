const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {

    // To generate rock, paper or scissors:
    // access the choices array with a number

    function getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);

        // get random item
        const item = arr[randomIndex];

        return item;
    }

    const result = getRandomItem(choices);
    return (result);           
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection) {

        playerSelection = prompt("Janken-Pô!!!");
        computerSelection = getComputerChoice();
        console.log("Player: ", playerSelection);
        console.log("Computer: ", computerSelection);
    
        if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            console.log("It's a tie!!");
        } else
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "Scissors") {
                playerScore++
                console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.toLowerCase()}!`);
            } else if (computerSelection === "Paper") {
                computerScore++
                console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
            }
        } else
        if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "Scissors") {
                playerScore++
                console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.toLowerCase()}!`);
            } else if (computerSelection === "Rock") {
                computerScore++
                console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
            }
        } else
        if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "Paper") {
                playerScore++
                console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.toLowerCase()}!`);
            } else if (computerSelection === "Rock") {
                computerScore++
                console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
            }
        }           
        else {
            console.log("What are you trying to input??");
        }      
    }

    function finalScore() {
        console.log("Player score: ", playerScore)
        console.log("Computer Score: ", computerScore)
        if (playerScore>computerScore) {
            console.log(`YOU WON THE GAME! CONGRATULATIONS, YOU WON BY ${playerScore-computerScore} POINTS`)
        } else
        if (computerScore>playerScore) {
            console.log(`YOU LOST THE GAME! THE COMPUTER WON BY ${playerScore-computerScore} POINTS`)
        } else {
            console.log("Well, that's odd!! Who won the game??")
        }
    }

    for(i=1; i<6; i++) {
        console.log(`Round ${i}!`);
        playRound()
    }

    finalScore()
}