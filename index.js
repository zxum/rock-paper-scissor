let playerSelects = document.querySelectorAll('.playerSelection')

for (var i = 0; i < playerSelects.length; i++) {
    playerSelects[i].addEventListener('click', playGame);
}

var playerWins = 0;
var computerWins = 0;

function computerPick() {
    let rps = ["rock", "paper", "scissors"];
    var computerSelect = rps[Math.floor(Math.random() * rps.length)];
    return computerSelect
}

function scoreKeeper() {
    let var1 = document.getElementById('playerScore').innerText = playerWins;
    console.log(var1);
    let var2 = document.getElementById('computerScore').innerText = computerWins;
    console.log(var2);
}



function playGame(e) {
    var imgs = document.querySelectorAll('img')

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('choice');
    }

    var compPlays = computerPick();
    var compSelectImg = document.querySelector(`img[data-id="${compPlays}"]`);
    compSelectImg.classList.add('choice');
    var playerPlays = e.target.attributes.id.value;
    var playerSelectImg = document.querySelector(`img[id="${playerPlays}"]`);
    playerSelectImg.classList.add('choice');
    console.log(compPlays);
    console.log(playerPlays);


    if (playerPlays == "rock" && compPlays == "paper") {
        computerWins += 1;
        scoreKeeper();
    } else if (playerPlays == "scissors" && compPlays == "rock") {
        computerWins += 1;
        scoreKeeper();
    } else if (playerPlays == "paper" && compPlays == "scissors") {
        computerWins += 1;
        scoreKeeper();
    } else if (playerPlays == "paper" && compPlays == "rock") {
        playerWins += 1;
        scoreKeeper();
    } else if (playerPlays == "scissors" && compPlays == "paper") {
        playerWins += 1;
        scoreKeeper();
    } else if (playerPlays == "rock" && compPlays == "scissors") {
        playerWins += 1;
        scoreKeeper();
    } else if (playerPlays == compPlays) {
        alert("It's a tie");
    } else {
        alert('Something went wrong');
    }


}