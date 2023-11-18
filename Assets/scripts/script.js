
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

    // run timmer for 5 seconds and show timer alert
    // and ask to Generate a New Password
    runTimerAndShowAlert(5); // value input for timer in seconds

    
    // reset webpage to initial state
    // resetWebpage();
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

    // create a pool of characters for each type chosen
    // passwordLengthCriteria,useLowercase,useUppercase,useNumeric,useSpecialCharacters


    return 0; // default value TODO
}


// run timmer for 5 seconds and show timer alert
function runTimerAndShowAlert(timeInterval) {
    // run timer for 5 seconds
    setTimeout(showAlert,timeInterval*1000); // convert to miliseconds *1000
    function showAlert() { // 
        alert("Please generate a new password");
    }
}

//
function resetWebpage() {
    // assignment code to display in webpage block "Your Secure Password"
    var passwordReset = document.querySelector("#password");
    passwordReset.value = "Your Secure Password"; //reset password
}

// Add event listener for button "Generate Password"
generateBtn.addEventListener("click", writePassword);
