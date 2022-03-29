// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = prompt("Enter how long you want your password to be between 8 and 128", "");
  var newPass = ["a"];

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var spec = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|",
   "}", "~"];
   var possibleChars = [];

   var i = 0;


  if(passLength == null || passLength == "") {
    alert("Nothing was entered")
    return "";
  }
  else if (isNaN(passLength)) {
    alert("Please enter a number");
    return "";
  }
  else if ( passLength < 8 || passLength > 128){
    alert("Number inputted was not within range")
    return "";
  }

  var useLower, useUpper, useNum, useSpec;

  if(confirm("Would you like lowercase letters in your password?")) {
    useLower = true;
  } else {
    useLower = false;
  }

  if(confirm("Would you like uppercase letters in your password?")) {
    useUpper = true;
  } else {
    useUpper = false;
  }

  if(confirm("Would you like numbers in your password?")) {
    useNum = true;
  } else {
    useNum = false;
  }

  if(confirm("Would you like special characters in your password?")) {
    useSpec = true;
  } else {
    useSpec = false;
  }

  if(!useLower && !useUpper && !useNum && !useSpec) {
    alert("Must use at least one character type");
    return "";
  }

  if(useLower) {
    for(i = 0; i < lowerCase.length; i++) {
      possibleChars[possibleChars.length] = lowerCase[i];
    }
  }

  if(useUpper) {
    for(i = 0; i < upperCase.length; i++) {
      possibleChars[possibleChars.length] = upperCase[i];
    }
  }

  if(useNum) {
    for(i = 0; i < nums.length; i++) {
      possibleChars[possibleChars.length] = nums[i];
    }
  }

  if(useSpec) {
    for(i = 0; i < spec.length; i++) {
      possibleChars[possibleChars.length] = spec[i];
    }
  }

  return newPass.join("");
}