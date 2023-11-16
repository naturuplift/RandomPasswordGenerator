// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log()

// Write password to the #password input
function writePassword(generateBtn) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    // display value
    console.log(passwordText.value)
}

// Password Generator function with criteria
function generatePassword() {

    // Need to present user with a series of prompts for password criteria

    // 1st - Prompt user for the length of the password and
    // check that length is at least 8 characters and no more than 128 character
    // --> ask user: How long would you like your password to be?
    // --> then indicate to: Please choose a number between 8 characters to 128 characters.

    // Ask user for character types to include in the password
    // Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // make prompt that includes all of the above via checkmark

    // Once user answer to all promts
    // Then validate input with at least one character type that should be selected

    //given all prompts are answered
    // generate password that matches the selected criteria

    // generate password and either display it in alert or written on page

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

