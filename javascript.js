//Used to keep track of the number of winners each have.
let humanScore=0, computerScore=0;

//mainContainer to get out div container
const mainContainer = document.querySelector('.container');
//creating an div to output our results saying who our winner are and another Div for our score.
const createDIV_result = document.createElement('div');
const createScore = document.createElement('div');
 
//getting our buttons to have an event listener later.
const btnRock = document.querySelector('.ROCK');
const btnPaper = document.querySelector('.PAPER');
const btnScissor = document.querySelector('.SCISSOR')

function getComputerChoice(){

    //Get a randomNum between 1-300. Because of 0 we add 1 so it's 1-300. Instead of 0-299(I think)
        let randomNum= Math.floor(Math.random() *300)+1;
        //Made all returns capatilized so we can uppercase the user's input for comparison
        //If the number is less than or equal to 100 return Rock;
        if(randomNum<=100) return 'ROCK';
        //If the number is great than 100 and less than or equal to 200 return Paper;
        else if(randomNum>100 && randomNum <= 200) return 'PAPER';  
        //If the number is great than 200 and less than or equal to 300 return Scissors;
        else if(randomNum>200 && randomNum <= 300) return 'SCISSOR';
    }

//I honestly cant think of a better way to check for a winner
    function playround(humanChoice, computerChoice){
        // console.log(`${humanChoice} human and this is computer ${computerChoice}`);
        if(humanChoice === computerChoice)
        {// console.log('test');
          createDIV_result.textContent=`${humanChoice} vs ${computerChoice} is a draw!`;
           //console.log(`${humanChoice} vs ${computerChoice} is a draw!`);
        }
        else if(humanChoice==='ROCK' && computerChoice==='PAPER')
        { 
            createDIV_result.textContent=`${humanChoice} does NOT beats ${computerChoice}`;
            //console.log(`${humanChoice} does NOT beats ${computerChoice}`);
            computerScore++;
        }
        else if(humanChoice==='ROCK' && computerChoice==='SCISSOR')
        {
            createDIV_result.textContent=`${humanChoice} beats ${computerChoice}`;
            //console.log(`${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(humanChoice==='PAPER' && computerChoice==='ROCK')
        {
            createDIV_result.textContent=`${humanChoice} beats ${computerChoice}`;
            //console.log(`${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(humanChoice==='PAPER' && computerChoice==='SCISSOR')
        {
            createDIV_result.textContent=`${humanChoice} does NOT beats ${computerChoice}`;
           // console.log(`${humanChoice} does NOT beats ${computerChoice}`);
            computerScore++;
        }
        else if(humanChoice==='SCISSOR' && computerChoice==='PAPER')
        {
            createDIV_result.textContent=`${humanChoice} beats ${computerChoice}`;
            //console.log(`${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(humanChoice==='SCISSOR' && computerChoice==='ROCK')
        {
            createDIV_result.textContent=`${humanChoice} does NOT beats ${computerChoice}`;
           // console.log(`${humanChoice} does NOT beats ${computerChoice}`);
            computerScore++;
        }
        mainContainer.appendChild(createDIV_result);
        createScore.textContent=`Total score: human's ${humanScore} vs computer's ${computerScore}`;
        mainContainer.appendChild(createScore);
    }
function playGame(playerInput){
    //Creating a variable and calling our function to give it a value. 
    // Then displaying that value to make sure its a desired value for our play function
    // console.log would be comment out after testing
    const computerSelection = getComputerChoice();
    //this was used to cheat a bit and test different results
    //console.log(computerSelection);
    const humanSelection = playerInput;          
    //console.log(humanSelection);
    playround(humanSelection,computerSelection);
    //console.log(`Total score: human's ${humanScore} vs computer's ${computerScore}`);
   }


 btnScissor.addEventListener('mousedown',(e) =>{
    // console.log(btnRock.className);
    e.stopPropagation;
   
        playGame(btnScissor.className);
      
   
   });

   btnPaper.addEventListener('mousedown',(e) =>{
    // console.log(btnRock.className);
    e.stopPropagation;

          playGame(btnPaper.className);
        
     
   });


   btnRock.addEventListener('mousedown',(e) =>{
    // console.log(btnRock.className);
    e.stopPropagation;

          playGame(btnRock.className);
        
   });

btnRock.addEventListener('mouseup',(e)=>{
       if(humanScore==5||computerScore==5)
         {
           gameResults();
           btnRock.disabled=true;
           btnPaper.disabled=true;
           btnScissor.disabled=true;
         }
});
btnPaper.addEventListener('mouseup',(e)=>{
       if(humanScore==5||computerScore==5)
         {
           gameResults();
           btnRock.disabled=true;
           btnPaper.disabled=true;
           btnScissor.disabled=true;
         }
});
btnScissor.addEventListener('mouseup',(e)=>{
       if(humanScore==5||computerScore==5)
         {
           gameResults();
           btnRock.disabled=true;
           btnPaper.disabled=true;
           btnScissor.disabled=true;
         }
});
//was trying something with mouseup and mousedown might go back to it.
//    btnPaper.addEventListener('mouseup',()=>{
//     if(humanScore >=5 || computerScore>=5)
//         {
//             btnPaper.removeEventListener('mouseup', gameResults());
//         }

//    });



    //removing count shows that the event listener is still on.
 let count = 1;
    function gameResults(){
        
        // console.log('HELLO FROM GAMERESULTS');
        const createFinalVictor = document.createElement('div');
        
        if(humanScore===5 && count ===1)
         {
             createFinalVictor.textContent=`With a total score of ${humanScore} THE WINNERS HUMANS`;
             mainContainer.appendChild(createFinalVictor);
             count++;
         }
         else if(computerScore===5 && count ===1)
         {
             createFinalVictor.textContent=`With a total score of ${computerScore} THE WINNERS COMPUTERS`;
             mainContainer.appendChild(createFinalVictor);
             count++;
         } 
    }
    
