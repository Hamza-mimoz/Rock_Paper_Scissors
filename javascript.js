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



function playRound (humanChoice , computerChoice ){ 
    
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







document.addEventListener("DOMContentLoaded", () => {
    alert("welcome to rock , scissors , paper game")
    
    const divGame = document.getElementById("divGame");
  
         
        divGame.addEventListener('click', function(e){
        
        let target=e.target;
        let humanChoice= target.id
        let  computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice );
        

        let player = document.querySelector("#player");
        
        player.textContent=humanScore;

        let computer = document.querySelector("#computer");
        computer.innerHTML= computerScore;

        alert (" your choice is :"+ humanChoice + " computer choice is :"+ computerChoice )

        if ( humanScore === 5 || computerScore === 5){
            if (humanScore ===5 ){
                alert( " you are the winner !!!")}
            else { alert(" the computer win and you lose the game  " )}  
            humanScore = 0 ; 
            computerScore = 0;  
            
        }

       
        });
        
        
        
});
