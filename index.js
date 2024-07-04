
let count = 0;
let compChoice = 0;

const playerRock = document.querySelector("#playerRock");
const playerPaper = document.querySelector("#playerPaper");
const playerScissors = document.querySelector("#playerScissors");
const countScore = document.querySelector(".score");
const resetScores = document.querySelector(".resetScore");

playerRock.addEventListener("click", function(){
    winCondition(1);
});

playerPaper.addEventListener("click", function(){
    winCondition(2);
});

playerScissors.addEventListener("click", function(){
    winCondition(3);
});

resetScores.addEventListener("click", resetScore);


function winCondition (playerChoice){
    compChoice = Math.floor((Math.random() * 3) + 1);
    
    if (playerChoice == 1 && compChoice == 1){
        showDraw();
        showCompChoice();
    } else if (playerChoice == 2 && compChoice == 2){
        showDraw();
        showCompChoice();
    } else if (playerChoice == 3 && compChoice == 3){
        showDraw();
        showCompChoice();
    } else if (playerChoice == 1 && compChoice == 2){
        showLose();
        showCompChoice();
    } else if (playerChoice == 1 && compChoice == 3){
        showWin();
        showCompChoice();
    } else if (playerChoice == 2 && compChoice == 1){
        showWin();
        showCompChoice();
    } else if (playerChoice == 2 && compChoice == 3){
        showLose();
        showCompChoice();
    } else if (playerChoice == 3 && compChoice == 1){
        showLose();
        showCompChoice();
    } else if (playerChoice == 3 && compChoice == 2){
        showWin();
        showCompChoice();
    } else {
        alert("Maybe there's some bugs, bro");
    }

}

function showCompChoice(){
    const compWord = document.querySelector(".computerChoice");
    
    if (compChoice == 1) {
        compWord.textContent = "Computer chose Rock!"
    } else if (compChoice == 2) {
        compWord.textContent = "Computer chose Paper!"
    } else if (compChoice == 3) {
        compWord.textContent = "Computer chose Scissors!"
    } else {
        alert ("Some bugs in comp choices");
    }
}

function showDraw(){
    const a = document.querySelector(".winQuote");
    a.textContent = "Draw! Try again!";
    countScore.textContent = `Score is ${count}`;
    
}

function showWin(){
    const b = document.querySelector(".winQuote");
    b.textContent = "You Won!"
    count ++;
    countScore.textContent = `Score is ${count}`;
}

function showLose(){
    const c = document.querySelector(".winQuote");
    c.textContent = "You loss, try again!"
    count --;
    countScore.textContent = `Score is ${count}`;
}

function resetScore(){
    count = 0;
    countScore.textContent = `Score is ${count}`;
}