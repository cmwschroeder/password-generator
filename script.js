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

  return "newPassword";
}