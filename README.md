# Password Generator in JavaScript

Project provides an application in the browser that an user can use to generate a random password based on criteria selected.
User is prompted to enter the length of the password of at least 8 characters and no more than 128 characters and choose character types Lowercase, Uppercase, Numeric, SpecialCharacters to be used to generate password. This features are dynamically updated and once password displayed for 10 seconds it reset webpage to original state.

## Original User Interface for Password Generator
![Webpage Display](https://github.com/naturuplift/password-generator/assets/23546356/8b13689b-a196-477e-a311-483ef9e040fa)

## Source Code
Source code hosted in Githab: https://naturuplift.github.io/password-generator/
```
https://naturuplift.github.io/password-generator/
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## State Flow Diagram for Sequences of Actions to Generate Password

![Password-Generator_v2](https://github.com/naturuplift/password-generator/assets/23546356/8040efc9-da89-436d-be66-115c5c50f2a8)
