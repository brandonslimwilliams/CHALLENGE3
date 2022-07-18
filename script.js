// Assignment code here


// Get references to the #generate element
// generateBtn is targeting the button generate password.
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //var lengthOfPassword = prompt("What is password lenght?");
 //var numbers = confirm('would you like to include numbers');
 // var lowerCase = confirm('would you like to include lowercase');
  //var upperCase = confirm('would you like to  include uppercase');
  //var symbol = confirm('would you like to include symbol');
// the varibles I concat
 //var num  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //var alphUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  //var alphLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //var sym = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  //var characterOptions = [];
    // validate input
    lengthOfPassword = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      return "Please choose a valid number of characters.";
    } else if (isNaN(lengthOfPassword)) {
      lengthOfPassword = prompt("Please enter a valid number.");
    }
    else {
      alert("Your password will be " + lengthOfPassword + " characters long.");
      
    }
  
    lowerCase = confirm("Do you want lowercase characters?");
    if (lowerCase) {
      var changeToLowercase = alert("Your password will have lowercase characters.");
    }
    else {
      alert("Your password will NOT have lowercase characters.");
    }
  
    upperCase = confirm("Do you want uppercase characters?");
    if (upperCase) {
      alert("Your password will have uppercase characters.");
    }
    else {
      alert("Your password will NOT have uppercase characters.");
    }
  
    numbers = confirm("Do you want to use numbers?");
    if (numbers) {
      alert("Your password will have numbers.");
    }
    else {
      alert("Your password will NOT have numbers.");
    }
  
    symbol = confirm("Do you want special characters?");
    if (symbol) {
      alert("Your password will have special characters.");
    }
    else {
      alert("Your password will NOT have special characters.");
    }
  
    if (lowerCase === false && upperCase === false && numbers  === false && symbol === false) {
      return "Please select at least one character type.";
    };

    var alphUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var alphLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var characterOptions = alphUpper.concat(alphLower);
    var num  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var sym = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var characterOptions = num .concat(sym);
    console.log(characterOptions);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var characterSelector = writePassword();
 //passwordtext is targeting the textarea.
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
