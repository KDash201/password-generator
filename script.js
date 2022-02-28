// Assignment Code

// Job Task
// CLICK the button to generate a password
// PROMPT for password criteria
// Select which criteria to use
// PROMPT for length of password
// PROMPT to choose a length of at least 8 characters and no more than 128 characters
// CONFIRM whether or not to include lowercase, uppercase, numeric, and/or special characters
// Validate each prompt and respond with at least 1 character type
// GENERATE password that matched the criteria
// Display password in an alert box or within the INNERTEXT of the html page

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var criteria = "";

  var askPasswordLength = prompt("Choose the length of password between 8 to 128 characters");
  if (askPasswordLength >= 8 && askPasswordLength <= 128) {
    var askLowerCase = confirm('Click ok to confirm if you want to include lower case characters');
    console.log(askLowerCase);
    var askUpperCase = confirm('Click ok to confirm if you want to include upper case characters');
    console.log(askUpperCase);
    var askNumChar = confirm('Click ok to confirm if you want to include numbers');
    console.log(askNumChar);
    var askSpecialChar = confirm('Click ok to confirm if you want to include special characters');
    console.log(askSpecialChar);

    if (askLowerCase || askUpperCase || askNumChar || askSpecialChar)
      for (i = 0; i < askPasswordLength; i++)
        if (askLowerCase && criteria.length < askPasswordLength) {

        }
  }


  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log("passwordText Value; ", passwordText.value);

  }


  //var passwordText = document.querySelector("#password");
  //console.log(passwordText);

  //function writePassword() {
  //  var passwordcriteria = {
  //    lower: randomLower,
  //    upper: randomUpper,
  //    number: randomNumber,
  //    symbol: randomSymbol,
  //  }
  //}
  //console.log(writePassword());

  function promptMe() {
    var askLowerCase = confirm('Click ok to confirm if you want to include lower case characters');
    if (askLowerCase);

    var askUpperCase = confirm('Click ok to confirm if you want to include upper case characters');
    var askNumChar = confirm('Click ok to confirm if you want to include numbers');
    var askSpecialChar = confirm('Click ok to confirm if you want to include special characters');



  }
}






var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
//var charLength = window.prompt("Choose the length of password between 8 to 128 characters");

// Generate a lower case character
var inputRandomLower = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(inputRandomLower());

// Generate a upper case character
var inputRandomUpper = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(inputRandomUpper());

// Generate a number
var inputRandomNumber = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(inputRandomNumber());

// Generate a special character
var inputRandomSymbol = function () {
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(inputRandomSymbol());

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("passwordText Value; ", passwordText.value);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// writePassword();