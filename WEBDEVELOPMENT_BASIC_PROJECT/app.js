let userScore = 0;
let skynetScore = 0;
const userScore_span = document.getElementById("userScore");
const skynetScore_span = document.getElementById("computerScore");
const scoreboard_div = document.querySelector(".score");
const result_div = document.querySelector(".result");
const happened_div = document.querySelector(".whatHappened");
const END_div= document.querySelector(".ENDGAME");
const refresh_div=document.querySelector(".refresh");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");



function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

/*getComputerChoice();*/

function toWord(letter){
    if (letter==="r")return "Rock"
    if (letter==="p")return "Paper"
    else return "Scissors";
}


function win(userChoice,skynetChoice){
    userScore++; 
    userScore_span.innerHTML = userScore; 
    skynetScore_span.innerHTML = skynetScore;
    happened_div.innerHTML="You chose: "+toWord(userChoice)+", Skynet chose: "+toWord(skynetChoice);
    result_div.innerHTML=toWord(userChoice)+" BEATS "+toWord(skynetChoice);
}
function lose(userChoice,skynetChoice){
    skynetScore++; 
    userScore_span.innerHTML = userScore; 
    skynetScore_span.innerHTML = skynetScore;
    happened_div.innerHTML="You chose: "+toWord(userChoice)+", Skynet chose: "+toWord(skynetChoice);
    result_div.innerHTML=toWord(skynetChoice)+" BEATS "+toWord(userChoice);
}
function draw(userChoice,skynetChoice){
    userScore++;
    skynetScore++;
    userScore_span.innerHTML=userScore;
    skynetScore_span.innerHTML=skynetScore;
    happened_div.innerHTML="You chose: "+toWord(userChoice)+", Skynet chose: "+toWord(skynetChoice);
    result_div.innerHTML="THAT'S A DRAW!!!";
}

function game(userChoice){

    if (userScore<=19 && skynetScore<=19){
        const skynetChoice=getComputerChoice();
        switch (userChoice + skynetChoice){
            case "rs":
            case "pr":
            case "sp":
                win(userChoice,skynetChoice);
                console.log("USER WINS!!"); break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice,skynetChoice);
                console.log("SKYNET WINS!!"); break;
            case "rr":
            case "pp":
            case "ss":
                draw(userChoice,skynetChoice);
                console.log("THAT'S A DRAW!!"); break;
        }
    }
    if (userScore===20 || skynetScore===20) {
        let winner="";
        if (userScore>skynetScore){winner="USER"}
        else {winner="SKYNET"}
        END_div.innerHTML="THAT'S THE END OF THE GAME!!"+"  "+winner+" WINS!!!!";
        refresh_div.innerHTML="Play Again??"
    }
}


function main(){
rock_div.addEventListener('click',function(){game("r");});
scissors_div.addEventListener('click',function(){game("s");});
paper_div.addEventListener('click',function(){game("p");});
}

main();