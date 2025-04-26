// console.log('Hello World');

// keep track of the score both each player
//declared these variables here so that every function that needs them can use them
let humanScore=0, computerScore=0;

const createDIV_result = document.createElement('div');
const mainContainer = document.querySelector('.container');
 
const btnRock = document.querySelector('.ROCK');
//    console.log(btnRock.className);
const btnPaper = document.querySelector('.PAPER');

const btnScissor = document.querySelector('.SCISSOR')
const createScore = document.createElement('div');

function getComputerChoice(){

    //Get a randomNum between 1-300. Because of 0 we add 1 so it's 1-300. Instead of 0-299(I think)
        let randomNum= Math.floor(Math.random() *300)+1;
        // checking that randNum is desired output
        // console.log(randomNum);
    
    
        //Made all returns capatilized so we can uppercase the user's input for comparison
        //If the number is less than or equal to 100 return Rock;
        if(randomNum<+100)
        {
            return 'ROCK';
        }
        
    
        //If the number is great than 100 and less than or equal to 200 return Paper;
        else if(randomNum>100 && randomNum <= 200)
        {
          return 'PAPER';  
        }
            
        //If the number is great than 200 and less than or equal to 300 return Scissors;
        else if(randomNum>200 && randomNum <= 300)
        {
            return 'SCISSOR';
        }
    
    }
    
    
    
    // function getHumanChoice(){
    
    //     //Prompt user for their input
    //     let userInput = prompt('Enter Rock Paper or Scissor');
    
    //     //checking that the userInput has our desired value and its uppercase for later.
    //     // console.log(userInput.toUpperCase());
    
    //     //returning the value in caps
    //     return(userInput.toUpperCase());
    
    // }

    
    // console.log(getComputerChoice());
    // console.log(getHumanChoice());
    
    
    
    
    function playround(humanChoice, computerChoice){

        // console.log(`${humanChoice} human and this is computer ${computerChoice}`);
        if(humanChoice === computerChoice)
        {
            // console.log('test');

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
    
    
        
       
       


        // console.log('in playround function');
    
    }
    
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
     
       

         
 
         mainContainer.appendChild(createFINISHmsg);
        
    }
    

   function playGame(playerInput){


    

//Creating a variable and calling our function to give it a value. 
    // Then displaying that value to make sure its a desired value for our play function
    // console.log would be comment out after testing
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    
    const humanSelection = playerInput;          //getHumanChoice(); old way of getting users input
    console.log(humanSelection);
    
   





    playround(humanSelection,computerSelection);

    console.log(`Total score: human's ${humanScore} vs computer's ${computerScore}`);

    


   }

   btnRock.addEventListener('mouseup', (e)=>{

    if(humanScore===5 || computerScore===5)
        {
          gameResults();
        }


   });
 

   btnScissor.addEventListener('mousedown',(e) =>{
    // console.log(btnRock.className);
    e.stopPropagation;



   
        playGame(btnScissor.className);
        console.log('HELLO');
    



   
   });

   btnPaper.addEventListener('mousedown',(e) =>{
    // console.log(btnRock.className);
    e.stopPropagation;
    
            playGame(btnScissor.className);
        
   });


   btnRock.addEventListener('mousedown',(e) =>{
    // console.log(btnRock.className);
    e.stopPropagation;
 
            playGame(btnScissor.className);
        
   });


