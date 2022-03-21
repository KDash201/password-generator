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

// generate password button
const upperCase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbols = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";

// Query Selectors
let passwordText = document.querySelector("#password");
let generateBtn = document.querySelector("#generate");

// Event Listeners
generateBtn.addEventListener("click", generatePassword);

//User input with prompts for incorrect data entry.
function generatePassword() {
  let newPassword = "";
  let characters = "";

  let askPasswordLength = prompt(
    "Choose the length of password between 8 to 128 characters"
  );

  if (
    Number(askPasswordLength < 8) ||
    Number(askPasswordLength > 128) ||
    isNaN(askPasswordLength)
  ) {
    alert("Must be between 8 and 128 characters.");
    return;
  }
  let askUpperCase = confirm(
    "Click ok to confirm if you want to include upper case characters"
  );

  if (askUpperCase) {
    characters += upperCase;
  }

  let askLowerCase = confirm(
    "Click ok to confirm if you want to include upper case characters"
  );

  if (askLowerCase) {
    characters += lowerCase;
  }

  let askNumChar = confirm(
    "Click ok to confirm if you want to include numbers"
  );

  if (askNumChar) {
    characters += num;
  }

  let askSpecialChar = confirm(
    "Click ok to confirm if you want to include special characters"
  );

  if (askSpecialChar) {
    characters += symbols;
    console.log(askSpecialChar);
  }

  // If no options are selected
  if (characters === "") {
    alert("Please enter at one of the chraracter criteria that is required!");
  }

  // For loop to  password
  if (Number(askPasswordLength >= 8) && Number(askPasswordLength <= 128)) {
    for (var i = 0; i < askPasswordLength; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    // let password = generatePassword();
    // let passwordText = document.querySelector("#password");

    // passwordText.value = password;
  }
  passwordText.textContent = newPassword;
  console.log(newPassword);
}
