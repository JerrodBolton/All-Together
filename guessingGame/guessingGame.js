// the first thing that I need to that will get the input number. 


;
// {/* <input type="text" name="guessInput" id="guessInput" placeholder="Enter your guess here" required/> */}



// this is the function that will get the number that was guessed
let aNumberGuessed = () => {
    // you have issues with your theNumberThatIsGuess variable because it was not in the function.
parseInt(document.getElementById('guessInput'))
let result = document.getElementById("guessResult");
// This is get the number that the user has guessed
let numberResult = document.getElementById('guessInput').value;

let number = parseInt(numberResult); 
// this is the number that the user has guessed
console.log(`${number}`); 
// this is check the type of data that the user has guessed
console.log(typeof(number));


if(number >= 31){
    result.innerHTML = "You guessed too high"; 
    result.style.color = "rgba(226, 20, 20, 0.7)";
    result.style.fontSize = "100px";
       
}
else if(number === 33){
    result.innerHTML = "You guessed the number";
    result.style.color = "rgba(20, 226, 20, 0.7)";
    result.style.fontSize = "50px";
}
else{   
    result.innerHTML = "You guessed too low";                                         
    result.style.color = "rgba(9, 28, 237, 0.8)";
    result.style.fontSize = "100px";
}
}

