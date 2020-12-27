//set const rock, paper, scissors
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

//set icons from FA
const rockIcon = `<i class="far fa-hand-rock fa-10x"></i>`;
const paperIcon = `<i class="far fa-hand-paper fa-10x"></i>`;
const scissorsIcon = `<i class="far fa-hand-scissors fa-10x"></i>`;
const errorIcon = `<i class="fas fa-times-circle fa-10x"></i>`;

//bring in DOM elements
let chooseYourFighter = document.querySelector("#chooseYourFighter");
let playerIcon = document.getElementById("playerIcon");
let btnRock = document.getElementById("btnRock");
let btnPaper = document.querySelector("#btnPaper");
let btnScissors = document.querySelector("#btnScissors");
let btnPlayAgain = document.querySelector("#btnPlayAgain");
let computerTitle = document.querySelector("#computerTitle");
let computerIcon = document.querySelector("#computerIcon");
let computerSelection;
let result = document.querySelector("#result");
let scoreboard = document.getElementById("scoreboard");
let userScoreboard = document.getElementById("userScoreboard");
let computerScoreboard = document.getElementById("computerScoreboard");
let userScore = 0;
let computerScore = 0;

const declareWinner = function(){
    if (userScore > computerScore) {
        alert("You beat the computer!", window.location.reload());
    } else {
        alert('The computer beat you! Try again?', window.location.reload());
    }
};


const userWins = function() {
    userScore++;
    return userScore;
};

const computerWins = function() {
    computerScore++;
    return computerScore;
};

//playAgain button function
const resetGame = function(){
    btnRock.classList.remove('collapse');
    btnPaper.classList.remove('collapse');
    btnScissors.classList.remove('collapse');
    btnPlayAgain.classList.remove('reveal');
    computerIcon.classList.add('collapse');
    playerIcon.classList.add('collapse');
    computerTitle.classList.add('collapse');
    result.classList.add('hide');
    chooseYourFighter.innerHTML = "CHOOSE YOUR FIGHTER";
}

//computer choice function
function computerPlay(){
    const computerChoices = [
        ROCK,
        PAPER,
        SCISSORS
        ];
    let computerThrow = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    computerIcon.classList.remove('collapse');
    result.classList.remove('hide');
    if (computerThrow === ROCK) {
        computerIcon.innerHTML = rockIcon;
    } else if (computerThrow === PAPER) {
        computerIcon.innerHTML = paperIcon;
    } else if (computerThrow === SCISSORS) {
        computerIcon.innerHTML = scissorsIcon;
    }
    console.log(computerThrow);
    return computerThrow;
}

//user choice functions
function userPickedRock(){
    playerIcon.innerHTML = rockIcon;
    playerIcon.classList.remove('collapse');
    btnRock.classList.add('collapse');
    btnPaper.classList.add('collapse');
    btnScissors.classList.add('collapse');
    btnPlayAgain.classList.add('reveal');
    computerTitle.classList.remove('collapse');
    chooseYourFighter.innerHTML = "You chose rock!";
    computerSelection = computerPlay();
    result.classList.remove('collapse');
    if (computerSelection === ROCK) {
        result.innerHTML = "tie!";
    } else if (computerSelection === PAPER) {
        result.innerHTML = "you lost!";
        computerWins();
        computerScoreboard.innerHTML = `${computerScore}`;
    } else if (computerSelection === SCISSORS) {
        result.innerHTML = "you won!";
        userWins();
        userScoreboard.innerHTML = userScore;
    }
    if (userScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function userPickedPaper(){
    playerIcon.innerHTML = paperIcon;
    playerIcon.classList.remove('collapse');
    btnRock.classList.add('collapse');
    btnPaper.classList.add('collapse');
    btnScissors.classList.add('collapse');
    btnPlayAgain.classList.add('reveal');
    computerTitle.classList.remove('collapse');
    chooseYourFighter.innerHTML = "You chose paper!";
    computerSelection = computerPlay();
    result.classList.remove('collapse');
    if (computerSelection === ROCK) {
        result.innerHTML = "you won!";
        userWins();
        userScoreboard.innerHTML = `${userScore}`;
    } else if (computerSelection === PAPER) {
        result.innerHTML = "you tie!";
    } else if (computerSelection === SCISSORS) {
        result.innerHTML = "you lost!";
        computerWins();
        computerScoreboard.innerHTML = `${computerScore}`;
    }
    if (userScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function userPickedScissors(){
    playerIcon.innerHTML = scissorsIcon;
    playerIcon.classList.remove('collapse');
    btnRock.classList.add('collapse');
    btnPaper.classList.add('collapse');
    btnScissors.classList.add('collapse');
    btnPlayAgain.classList.add('reveal');
    computerTitle.classList.remove('collapse');
    chooseYourFighter.innerHTML = "You chose scissors!";
    computerSelection = computerPlay();
    result.classList.remove('collapse');
    if (computerSelection === ROCK) {
        result.innerHTML = "you lost!";
        computerWins();
        computerScoreboard.innerHTML = `${computerScore}`;
    } else if (computerSelection === PAPER) {
        result.innerHTML = "you won!";
        userWins();
        userScoreboard.innerHTML = `${userScore}`;
    } else if (computerSelection === SCISSORS) {
        result.innerHTML = "tie!";
    }
    if (userScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

btnRock.addEventListener('click', userPickedRock);
btnPaper.addEventListener('click', userPickedPaper);
btnScissors.addEventListener('click', userPickedScissors);
btnPlayAgain.addEventListener('click', resetGame);