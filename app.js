let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("pedra");
const paper_div = document.getElementById("papel");
const tes_div = document.getElementById("tesoura");

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = userChoice + " vence " + computerChoice + ". Você venceu!;"
}

function lose(){
    cpuScore++;
}

function draw(){
    console.log("draw");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("r")
    })

    paper_div.addEventListener('click', function(){
        game("p")
    })

    tes_div.addEventListener('click', function(){
        game("s");
    })
}

main();