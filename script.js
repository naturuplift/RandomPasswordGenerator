// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log()

// Write password to the #password input
function writePassword(generateBtn) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log(passwordText.value)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



