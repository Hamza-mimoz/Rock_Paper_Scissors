let humanScore = 0 ;
let computerScore = 0 ; 



function getComputerChoice(){
    let choice_numbre = Math.floor( Math.random()*3)
    if (choice_numbre === 0 ){
    let choice_comptre = " rock"
    console.log( choice_comptre)
    }
    else if (choice_numbre === 1 ){
    choice_comptre = " paper"
    console.log( choice_comptre)
    }
    else {choice_comptre = "scissors"
    console.log( choice_comptre) };
}

function getHumanChoice(){ 

    let choice_humane = prompt(" entre your choice rock, papre or scissors : ")

    return console.log( choice_humane)
}



getHumanChoice()

getComputerChoice()