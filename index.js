function game() {

    var roundNum = 0;
    var computerWins = 0;
    var playerWins=0;

    for (let i=0; i<5; i++) {
        
        function computerPlay() {
            var selection = ["rock", "paper","scissors"];
            var computerPick = selection[Math.floor(Math.random()*selection.length)];
            return computerPick;
        }
        function singleRound(playerSelection, computerSelection) {
            var playerSelection = playerSelection.toLowerCase();
            if (playerSelection == "rock" && computerSelection == "paper") {
                computerWins += 1;
                console.log("You lose, Paper beats Rock!");
                return computerWins;
            } else if (playerSelection == "scissors" && computerSelection == "rock") {
                computerWins += 1;
                console.log("You lose, Rock beats Scissors");
                return computerWins;
            } else if (playerSelection == "paper" && computerSelection == "scissors") {
                computerWins += 1;
                console.log("You lose! Scissors beats Paper");
                return computerWins;
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                playerWins += 1;
                console.log("You win! Paper beats Rock");
                return playerWins;
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                playerWins += 1;
                console.log("You win! Scissors beats Paper");
                return playerWins;
            } else if (playerSelection == "rock" && computerSelection == "scissors") {
                playerWins += 1;
                console.log("You win! Rock beats Scissors!");
                return playerWins;
            } else if (playerSelection == computerSelection) {
                console.log("It is a tie!");
            } else {
                console.log("There is an error.");
                }
            }
        
        roundNum = roundNum + 1;
        console.log("Round" + roundNum);
        var playerSelection = prompt('Rock, Paper, or Scissor?');
        console.log("Player picked: " + playerSelection);
        var computerSelection = computerPlay();
        console.log("Computer picked: " + computerSelection);
        singleRound(playerSelection,computerSelection);
        console.log("Computer score: " + computerWins)
        console.log("Player score: " + playerWins)
    }
    if (playerWins > computerWins) {
            console.log("Player wins game!");
        }
        else if (playerWins < computerWins) {
            console.log("Computer wins game!");
        }
        else {
            console.log("It was a tie!");
        }
}
console.log(game());