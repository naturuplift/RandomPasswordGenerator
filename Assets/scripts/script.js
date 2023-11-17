
// Assignment code  (id = generate) to generateBtn variable
var generateBtn = document.querySelector("#generate");

// Declare global variables

// Write password to the #password input
function writePassword() {

    var passwordLength = promptPasswordLength(); // get length for password
    var password = generatePassword(); // generate password 
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Prompt user for the length of the password
function promptPasswordLength() {
    do {
        passwordLengthValue = prompt("How long would you like your password to be? (Please enter a number between 8 and 128)");
        passwordLengthValue = parseInt(passwordLengthValue);
        console.trace(passwordLengthValue)
    } while (isNaN(passwordLengthValue) || passwordLengthValue < 8 || passwordLengthValue > 128);
    return passwordLengthValue;
}

// Password Generator function with criteria
function generatePassword() {
    return 0; // default value TODO
}

// Add event listener for button "Generate Password"
generateBtn.addEventListener("click", writePassword);

