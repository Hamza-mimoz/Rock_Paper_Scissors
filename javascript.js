let humanScore = 0 ;
let computerScore = 0 ; 



function getComputerChoice(){
    let choice_numbre = Math.floor( Math.random()*3)
    let choice_comptre = " "
    if (choice_numbre === 0 ){
     choice_comptre = "rock"
    console.log( choice_comptre)
    }
    else if (choice_numbre === 1 ){
    choice_comptre = "paper"
    console.log( choice_comptre)
    }
    else {choice_comptre = "scissors"
    console.log( choice_comptre) };

    return choice_comptre
}

function getHumanChoice(){ 

    let choice_humane1 = prompt(" entre your choice rock, papre or scissors : ")
            choice_humane = choice_humane1.toLowerCase()
            console.log( choice_humane)

    return choice_humane
}

function playRound (humanChoice , computerChoice ){
    humanChoice= getHumanChoice(); 
    computerChoice = getComputerChoice();
    if ( humanChoice === "rock" && computerChoice ==="paper" ){
        computerScore ++
        console.log( " You lose! Paper beats Rock");
        console.log( "human Score : " + humanScore);
        console.log( " computer Score : "+ computerScore);
    } else if ( humanChoice === "paper" && computerChoice ==="rock"  ){
        humanScore ++
        console.log( " You win! Paper beats Rock");
        console.log( "human Score : " + humanScore);
        console.log( " computer Score : "+ computerScore);
    }else if (humanChoice === "rock" && computerChoice ==="scissors" ){
        humanScore ++ 
        console.log( " You win! Rock beats scissors");
        console.log( "human Score : " + humanScore);
        console.log( " computer Score : "+ computerScore);
    } else if (humanChoice === "scissors" && computerChoice ==="rock" ){
        computerScore ++ 
        console.log( " You lose! Rock beats scissors");
        console.log( "human Score : " + humanScore);
        console.log( " computer Score : "+ computerScore);
    } else if (humanChoice === "scissors" && computerChoice ==="paper" ){
        humanScore ++ 
        console.log( " You win! scissors beats papre");
        console.log( "human Score : " + humanScore);
        console.log( " computer Score : "+ computerScore);
    } else if (humanChoice === "paper" && computerChoice ==="scissors" ){
        computerScore ++ 
        console.log( " You lose! scissors beats papre");
        console.log( "human Score : " + humanScore);
        console.log( " computer Score : "+ computerScore);
    } else
     { console.log( " no one win!!!");}
      
     
}




function play_game(){
for (let i=0 ; i<5;i++ ){
playRound()
}
if (  humanScore < computerScore ){ 
    console.log(" you lose the game!! ")
}else if (computerScore <  humanScore   ){ 
    console.log("  you are the winner vectorie!! ")
}
else{ console.log( " play a new game!!!")}

}

play_game()