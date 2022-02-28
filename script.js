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

const generateBtn = document.querySelector("#generate");

function generatePassword() {
  let criteria = "";

  let askPasswordLength = prompt("Choose the length of password between 8 to 128 characters");
  if (askPasswordLength >= 8 && askPasswordLength <= 128) {
    const askLowerCase = confirm('Click ok to confirm if you want to include lower case characters');
    console.log(askLowerCase);
    const askUpperCase = confirm('Click ok to confirm if you want to include upper case characters');
    console.log(askUpperCase);
    const askNumChar = confirm('Click ok to confirm if you want to include numbers');
    console.log(askNumChar);
    const askSpecialChar = confirm('Click ok to confirm if you want to include special characters');
    console.log(askSpecialChar);

    if (askLowerCase || askUpperCase || askNumChar || askSpecialChar)
      for (i = 0; i < askPasswordLength; i++) {
        if (askLowerCase && criteria.length < askPasswordLength) {
          var randomNumber = Math.floor(Math.random() * 26 + 97);
          console.log(randomNumber);
          criteria = criteria + String.fromCharCode(randomNumber)
        }

        if (askUpperCase && criteria.length < askPasswordLength) {
          var randomNumber = Math.floor(Math.random() * 26 + 65);
          console.log(randomNumber);
          criteria = criteria + String.fromCharCode(randomNumber)
        }

        if (askNumChar && criteria.length < askPasswordLength) {
          var randomNumber = Math.floor(Math.random() * 10 + 65);
          console.log(randomNumber);
          criteria = criteria + String.fromCharCode(randomNumber)

          if (askSpecialChar && criteria.length < askPasswordLength) {
            var randomNumber = Math.floor(Math.random() * 14 + 33);
            console.log(randomNumber);
            criteria = criteria + String.fromCharCode(randomNumber)
          }
        }
        return criteria;
      } else {
      alert("Please enter at one of the chraracter criteria that is required!")
      return "Error";
    }

  } else {
    alert("Please select the correct password criteria!")
    return "Error";
  }
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("passwordText Value; ", passwordText.value);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// writePassword();