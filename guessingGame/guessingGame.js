// the first thing that I need to that will get the input number. 
let stringNumber = document.getElementById("guessInput").value;
let result = document.getElementById("guessResult");
let number = parseInt(stringNumber);




// this is the function that will get the number that was guessed
let aNumberGuessed = () => {
  
    

// console.log(`${theNumberThatIsGuessed}`);
console.log(typeof(number));
if(number > 5){
    result.innerHTML = "You guessed too high";    
}
else if(number === 5){
    result.innerHTML = "You guessed the number";
}
else{   
    result.innerHTML = "You guessed too low";                                         
  
}}

