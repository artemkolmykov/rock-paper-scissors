optionsArray = ['Rock', 'Paper','Scissors']
function computerPlay() {
    //debugger;
    num=Math.floor(Math.random()*optionsArray.length);
    return optionsArray[num]

}
function playRound(playerSelection, computerSelection) {
    ///
    let first=playerSelection.toLowerCase();
    let second=computerSelection.toLowerCase();
    if (first==second){
        return "Tie!";
    } else if (first==optionsArray[0].toLowerCase() &&
         second==optionsArray[2].toLowerCase()){
            return "You win!" + optionsArray[0] + " beats " +
            optionsArray[2];
    } else if (first==optionsArray[0].toLowerCase() &&
                second==optionsArray[1].toLowerCase()) {
            return "You loose!" + optionsArray[1] + " beats " +
            optionsArray[0];                     

    } else if (first==optionsArray[1].toLowerCase() &&
    second==optionsArray[0].toLowerCase()) {
    return "You win!" + optionsArray[1] + " beats " +
            optionsArray[0];   
    } else if (first==optionsArray[1].toLowerCase() &&
    second==optionsArray[2].toLowerCase()) {
    return "You lose!" + optionsArray[2] + " beats " +
            optionsArray[1];   
    } else if (first==optionsArray[2].toLowerCase() &&
    second==optionsArray[1].toLowerCase()) {
    return "You win!" + optionsArray[2] + " beats " +
            optionsArray[1];   
    } else if (first==optionsArray[2].toLowerCase() &&
        second==optionsArray[0].toLowerCase()){
           return "You loose!" + optionsArray[0] + " beats " +
           optionsArray[2];
        }
    return "impossible";
}

function game() {
    for (let i=1;i<=100;i++) {
        computerSelection = computerPlay();
        //playerSelection = prompt("Rock, paper or scissors?");
        playerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}
//const computerSelection = computerPlay();
//const playerSelection= computerSelection;
let playerSelection = "scissors";
let computerSelection = "rock";
//console.log(playRound(playerSelection,computerSelection))
game();