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
  //Prompting the user to see how long the new Password to be
  var passLength = prompt("Enter how long you want your password to be between 8 and 128", "");
  var newPass = [];

  // Initializing arrays holding possible characters that could populate the new password
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var spec = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|",
   "}", "~"];
   // initializing an array that will hold all the possible characters that will be selected from
   var possibleChars = [];

   // Initializing an array that will hold the spots that we will make sure selected types of characters will be put in
   var charSpots = [];

   // Initializing an incrementor for the for loops
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

  // Filling the new password with placeholder values for now
  for(i = 0; i < passLength; i++) {
    newPass[i] = "a";
  }

  // Initializing variables so that we can add a character from each type selected
  var spot;
  var selectChar;

  // Adding a lower case character in a random spot to make sure we have a lower case character
  // if the user selected having a lower case character
  var notInserted = true;
  if(useLower) {
    //run loop while we haven't inserted a lower case letter
    while(notInserted) {
      //get a random spot to put the letter in
      spot = Math.floor(Math.random() * passLength);
      //make sure the spot isn't already taken
      if(!charSpots.includes(spot)) {
        //select a random lower case letter and put it in the new password in the spot selected and now it is inserted
        selectChar = Math.floor(Math.random() * lowerCase.length);
        newPass[spot] = lowerCase[selectChar];
        notInserted = false;
      }
    }
  }

  // Adding a upper case character in a random spot to make sure we have a upper case character
  // if the user selected having a upper case character
  notInserted = true;
  if(useUpper) {
    while(notInserted) {
      spot = Math.floor(Math.random() * passLength);
      if(!charSpots.includes(spot)) {
        selectChar = Math.floor(Math.random() * upperCase.length);
        newPass[spot] = upperCase[selectChar];
        notInserted = false;
      }
    }
  }

  // Adding a number in a random spot to make sure we have a number
  // if the user selected having a number
  notInserted = true;
  if(useNum) {
    while(notInserted) {
      spot = Math.floor(Math.random() * passLength);
      if(!charSpots.includes(spot)) {
        selectChar = Math.floor(Math.random() * nums.length);
        newPass[spot] = nums[selectChar];
        notInserted = false;
      }
    }
  }

  // Adding a special character in a random spot to make sure we have a special character
  // if the user selected having a special character
  notInserted = true;
  if(useSpec) {
    while(notInserted) {
      spot = Math.floor(Math.random() * passLength);
      if(!charSpots.includes(spot)) {
        selectChar = Math.floor(Math.random() * spec.length);
        newPass[spot] = spec[selectChar];
        notInserted = false;
      }
    }   
  }

//filling the rest of the password with random characters of the selected criteria
for(i = 0; i < newPass.length; i++) {
  //checks to make sure that this spot isn't already filled
  if(!charSpots.includes(i)) {
    selectChar = Math.floor(Math.random() * possibleChars.length);
    newPass[i] = possibleChars[selectChar];
  }
}

  return newPass.join("");
}