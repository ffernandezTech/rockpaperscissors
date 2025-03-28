// console.log('Hello World');

function getComputerChoice(){

//Get a randomNum between 1-300. Because of 0 we add 1 so it's 1-300. Instead of 0-299(I think)
    let randomNum= Math.floor(Math.random() *300)+1;
    // checking that randNum is desired output
    // console.log(randomNum);


    //If the number is less than or equal to 100 return Rock;
    if(randomNum<+100)
    {
        return 'Rock';
    }
    

    //If the number is great than 100 and less than or equal to 200 return Paper;
    else if(randomNum>100 && randomNum <= 200)
    {
      return 'Paper';  
    }
        
    //If the number is great than 200 and less than or equal to 300 return Scissors;
    else if(randomNum>200 && randomNum <= 300)
    {
        return 'Scissor';
    }

}

console.log(getComputerChoice());