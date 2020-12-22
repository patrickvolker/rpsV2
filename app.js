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
let btnRock = document.getElementById("btnRock");
let btnPaper = document.querySelector("#btnPaper");
let btnScissors = document.querySelector("#btnScissors");
let btnPlayAgain = document.querySelector("#btnPlayAgain");
let computerTitle = document.querySelector("#computerTitle");
let computerIcon = document.querySelector("#computerIcon");
let computerSelection = computerPlay();
let result = document.querySelector("#result");
let scoreboard = document.getElementById("scoreboard");
let userScoreboard = document.querySelector("#userScoreboard");
let computerScoreboard = document.querySelector("#computerScoreboard");
let userScore = 0;
let computerScore = 0;

const userWins = function(){
    userScore++;
};

const computerWins = function(){
    computerScore++;
};

//computer choice function
function computerPlay(){
    const computerChoices = [
        ROCK,
        PAPER,
        SCISSORS
        ];
    let computerThrow = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    if (computerThrow === ROCK) {
        computerIcon.innerHTML = rockIcon;
    } else if (computerThrow === PAPER) {
        computerIcon.innerHTML = paperIcon;
    } else if (computerThrow === SCISSORS) {
        computerIcon.innerHTML = scissorsIcon;
    }
    console.log(computerThrow);
}

//user choice functions
function userPickedRock(){
    document.getElementById("playerIcon").innerHTML = rockIcon;
    btnRock.classList.add('collapse');
    btnPaper.classList.add('collapse');
    btnScissors.classList.add('collapse');
    btnPlayAgain.classList.add('reveal');
    computerTitle.classList.remove('collapse');
    chooseYourFighter.innerHTML = "You chose rock!";
    computerPlay();
    result.classList.remove('collapse');
    if (computerSelection === ROCK) {
        scoreboard.innerHTML = "tie!";
    } else if (computerSelection === PAPER) {
        scoreboard.innerHTML = "you lost!";
        computerWins();
        computerScoreboard.innerHTML = `${computerScore}`;
    } else if (computerSelection === SCISSORS) {
        scoreboard.innerHTML = "you won!";
        userWins();
        userScoreboard.innerHTML = `${userScore}`;
    }
}

function userPickedPaper(){
    document.getElementById("playerIcon").innerHTML = paperIcon;
    btnRock.classList.add('collapse');
    btnPaper.classList.add('collapse');
    btnScissors.classList.add('collapse');
    btnPlayAgain.classList.add('reveal');
    computerTitle.classList.remove('collapse');
    chooseYourFighter.innerHTML = "You chose paper!";
    computerPlay();
    result.classList.remove('collapse');
    if (computerSelection === ROCK) {
        scoreboard.innerHTML = "you won!";
        userWins();
        userScoreboard.innerHTML = `${userScore}`;
    } else if (computerSelection === PAPER) {
        scoreboard.innerHTML = "you tie!";
    } else if (computerSelection === SCISSORS) {
        scoreboard.innerHTML = "you lost!";
        computerWins();
        computerScoreboard.innerHTML = `${computerScore}`;
    }
}

function userPickedScissors(){
    document.getElementById("playerIcon").innerHTML = scissorsIcon;
    btnRock.classList.add('collapse');
    btnPaper.classList.add('collapse');
    btnScissors.classList.add('collapse');
    btnPlayAgain.classList.add('reveal');
    computerTitle.classList.remove('collapse');
    chooseYourFighter.innerHTML = "You chose scissors!";
    computerPlay();
    result.classList.remove('collapse');
    if (computerSelection === ROCK) {
        scoreboard.innerHTML = "you lost!";
        computerWins();
        computerScoreboard.innerHTML = `${computerScore}`;
    } else if (computerSelection === PAPER) {
        scoreboard.innerHTML = "you won!";
        userWins();
        userScoreboard.innerHTML = `${userScore}`;
    } else if (computerSelection === SCISSORS) {
        scoreboard.innerHTML = "you tie!";
    }
}

btnRock.addEventListener('click', userPickedRock);
btnPaper.addEventListener('click', userPickedPaper);
btnScissors.addEventListener('click', userPickedScissors);
// btnPlayAgain.addEventListener('click', userPickedRock)

//game function

//computer logic engine (lol)
// function computerPlay(){
//     const computerChoices = [
//         ROCK,
//         PAPER,
//         SCISSORS
//         ];
//     return computerChoices[Math.floor(Math.random()*computerChoices.length)];
// }