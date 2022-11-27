let userScore = 0
let computerScore = 0
const userPointsLabel = document.getElementById("userPoints")
const computerPointsLabel = document.getElementById("computerPoints")
const resultLabel = document.getElementById("resultLabel")

function getComputerChoice() {
    choices = ["rock", "paper", "scissors"]
    int = Math.floor(Math.random() * 3)
    return choices[int]
}

function win(winnerChoice, loserChoice) {
    console.log("Win")
    userScore++
    userPointsLabel.innerHTML = userScore
    resultLabel.innerHTML = winnerChoice + " beats " + loserChoice + ". You win!"
}

function draw(drawChoice) {
    console.log("Draw")
    resultLabel.innerHTML = drawChoice + " equals " + drawChoice + ". It's draw."
}

function lose(loserChoice, winnerChoice) {
    console.log("Lost")
    computerScore++
    computerPointsLabel.innerHTML = computerScore
    resultLabel.innerHTML = loserChoice + " loses to " + winnerChoice + ". You lost!"
}

function game(userChoice) {
    computerChoice = getComputerChoice()
    console.log("User: " + userChoice)
    console.log("Computer: " + computerChoice)
    switch(userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice)
            break
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, computerChoice)
            break
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice)
            break
    }
}