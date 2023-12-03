// Assignment code  (id = generate) to generateBtn variable
var generateBtn = document.querySelector("#generate");

// Write random password for criteria selected by user
function writePassword() {

// get length value from 8 to 128 for password
var passwordLength = promptPasswordLength();

// get password character types (true or false) in an array
// [Lowercase,Uppercase,Numeric,SpecialCharacters]
var [Lowercase,Uppercase,Numeric,SpecialCharacters] = promptPasswordTypes();

// generate password with length value and character types
var password = generatePassword(passwordLength,Lowercase,Uppercase,Numeric,SpecialCharacters);

// assignment code to display in webpage block "Your Secure Password"
var passwordText = document.querySelector("#password");

// Set value of the password to the generated password
passwordText.value = password;

// run timmer to reset webpage to initial state
runTimer(resetWebpage);
}

// Prompt user for the length of the password
// length of at least 8 characters and no more than 128 characters
function promptPasswordLength() {

// repeat until valid value in entered
do {
    passwordLengthValue = prompt("How long would you like your password to be? (Please enter a number between 8 and 128)");
    passwordLengthValue = parseInt(passwordLengthValue); // parse string value and convert it into an integer
} while (isNaN(passwordLengthValue) || passwordLengthValue < 8 || passwordLengthValue > 128); //
return passwordLengthValue;
}

// Prompt user for character types for the password
// character types: lowercase, uppercase, numeric, and/or special characters
function promptPasswordTypes() {

// reapeat until one character type is selected
do {
    confirmLowercase = confirm("Would you like to include lowercase characters?"); // confirm lower case character
    confirmUppercase = confirm("Would you like to include uppercase characters?"); // confirm upper case character
    confirmNumeric = confirm("Would you like to include numeric characters?"); // confirm numeric character
    confirmSpecialCharacters = confirm("Would you like to include special characters?"); // confirm special character

} while (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecialCharacters);

// return character types (true or false) in an array [Lowercase,Uppercase,Numeric,SpecialCharacters]
return [confirmLowercase,confirmUppercase,confirmNumeric,confirmSpecialCharacters];
}

// Password Generator function with length value and character types criteria
// where input passwordLengthCriteria is the length of the password and
// where inputs useLowercase,useUppercase,useNumeric,useSpecialCharacters are the character types
// to use when generating password with value (true or false)
function generatePassword(passwordLengthCriteria,useLowercase,useUppercase,useNumeric,useSpecialCharacters) {

var characterSetPool = ""; // initialize character set pool
var randomPassword = ""; // initialize password

// create a pool of characters for each type chosen
// passwordLengthCriteria,useLowercase,useUppercase,useNumeric,useSpecialCharacters
if (useLowercase) characterSetPool += "abcdefghijklmnopqrstuvwxyz";
if (useUppercase) characterSetPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (useNumeric) characterSetPool += "1234567890";
if (useSpecialCharacters) characterSetPool += "!@#$%^&*()_+[]{}|;:,.<>?";

// select number of characters from pool characterSetPool times
for (let i=0; i < passwordLengthCriteria; i++) {
    // select random character from set pool 'characterSetPool'
    // by generating a random index within the range of valid indices
    var randomCharacter = Math.floor(Math.random() * characterSetPool.length);
    randomPassword += characterSetPool.charAt(randomCharacter); // add character to password
}

return randomPassword; // return random password for user criteria
}

// run timer for time Interval entered by user and after the timer runs out,
// call the resetWebpage function (passed as a callback)
function runTimer(callback) {
// prompt user for lenght of time to display password
timeResetPage = prompt("For how long would you like to display the password (in seconds)?");

setTimeout(function() { // run timer for timeInterval seconds
    if (callback) {
        callback(); // Call the callback function after the timer
    }
}, timeResetPage * 1000); // convert to miliseconds *1000
}

// Reset webpage to original state5
function resetWebpage() {

// let know user need to generate a new password
alert('Time is up! Generate a new password');

// assignment code to display in webpage block "Your Secure Password"
var passwordReset = document.querySelector("#password");

// Set value of password to original state
passwordReset.value = "Your Secure Password";
}

// Add event listener for button "Generate Password"
generateBtn.addEventListener("click", writePassword);