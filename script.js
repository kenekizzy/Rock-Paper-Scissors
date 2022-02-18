
//Declaring the DOM variables 
const playerScore = document.querySelector("#player-score")
const playerChoice = document.querySelector("#player-choice")
const computerScore = document.querySelector("#computer-score")
const computerChoice = document.querySelector("#computer-choice")
const resultText = document.querySelector("#result-text")
//Getting the players choice
const playerRock = document.querySelector("#playerRock")
const playerPaper = document.querySelector("#playerPaper")
const playerScissors = document.querySelector("#playerScissors")
const playerLizard = document.querySelector("#playerLizard")
const playerSpock = document.querySelector("#playerSpock")

//Declaring the computer choices
const computerRock = document.querySelector("#computerRock")
const computerPaper = document.querySelector("#computerPaper")
const computerScissors = document.querySelector("#computerScissors")
const computerLizard = document.querySelector("#computerLizard")
const computerSpock = document.querySelector("#computerSpock")

//Getting the Game Icons
const gameIcons = document.querySelectorAll(".far")

//Game Choices
const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

//Declaring the computer choice
let playerScoreNumber = 0
let computerScoreNumber = 0
let computerChoices = ""

//Selecting the computer choices
function selectComputerChoice(){
  const computerNumber = Math.random()
  if(computerNumber < 0.2){
    computerChoices = "rock"
  }else if(computerNumber <= 0.4){
    computerChoices = "paper"
  }else if(computerNumber <= 0.6){
    computerChoices = "scissors"
  }else if(computerNumber <= 0.8){
    computerChoices = "lizard"
  }else{
    computerChoices = "spock"
  }
  //Displaying the results
  switch(computerChoices){
    case "rock":
      computerRock.classList.add("selected")
      computerChoice.textContent = "--- Rock"
      break;
      case "paper":

        computerPaper.classList.add("selected")
        computerChoice.textContent = "--- Paper"
        break;
        case "scissors":
  
          computerScissors.classList.add("selected")
          computerChoice.textContent = "--- Scissors"
          break;
          case "lizard":
    
            computerLizard.classList.add("selected")
            computerChoice.textContent = "--- Lizard"
            break;
            case "spock":
      
              computerSpock.classList.add("selected")
              computerChoice.textContent = "--- Spock"
              break;  
              default:
                break;
  }
}

//Checking the results between Player and Computer
function checkPlay(playerChoice){
  if(playerChoice === computerChoices){
    resultText.textContent = "It is a Tie"
  }else{
    const choice = choices[playerChoice]
    if(choice.defeats.indexOf(computerChoices) >= 0){
      resultText.textContent = "You Won"
      playerScoreNumber++
      playerScore.textContent = playerScoreNumber
    }else{
      resultText.textContent = "You Lost"
      computerScoreNumber++
      computerScore.textContent = computerScoreNumber
    }
  }
}

//Checking all the functions
function displayResults(value){
  resetSelected()
  selectComputerChoice()
  checkPlay(value)
}

//Displaying the player value
function select(value){
  displayResults(value)
  switch(value){
    case "rock":
      playerRock.classList.add("selected")
      playerChoice.textContent = "--- Rock"
      break;
      case "paper":

        playerPaper.classList.add("selected")
        playerChoice.textContent = "--- Paper"
        break;
        case "scissors":
  
          playerScissors.classList.add("selected")
          playerChoice.textContent = "--- Scissors"
          break;
          case "lizard":
    
            playerLizard.classList.add("selected")
            playerChoice.textContent = "--- Lizard"
            break;
            case "spock":
      
              playerSpock.classList.add("selected")
              playerChoice.textContent = "--- Spock"
              break;  
              default:
                break;
  }
}


//Resetting all the selected functions
function resetSelected(){
  gameIcons.forEach((icon) => {
    icon.classList.remove("selected")
  })
}

function resetAll(){
  resetSelected()
  playerScoreNumber = 0
 computerScoreNumber = 0
 computerChoices = ""
 resultText.textContent = "Restart"
 playerScore.textContent = playerScoreNumber
 computerScore.textContent = computerScoreNumber
 playerChoice.textContent = "--- Choice"
 computerChoice.textContent = "--- Choice"
}


