var generatePasswordButton = document.getElementById("generate");
var copyToClipBoardButton = document.getElementById("copytoClipboard");

var uppercaseOnly = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercaseOnly = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specialOnly = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var numberOnly = [0,1,2,3,4,5,6,7,8,9];


function generateOptions() {

  var length = parseInt(prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128."));
  if (length < 8) {
    alert('The password must be at least 8 characters!');
    return;
  }
  if (length > 128) {
    alert('The password must be less than 128 characters!');
    return;
  }

  var shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");
    
  //prompt user for numeric characters
  var shouldIncludeNumeric = confirm("Do you want to include numeric characters?");
  
  //prompt user for lowercase characters
  var shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");
  
  //prompt user for uppercase characters
  var shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");
  
  if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
      alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
      return;
  }

  var questionOptions = {
      length: length,
      specialCharacters: shouldIncludeSpecialCharacters,
      numeric: shouldIncludeNumeric,
      lowerCase: shouldIncludeLowercase,
      upperCase: shouldIncludeUppercase
  }

  return questionOptions;

  }
  function generatePassword() {

    var options = generateOptions();
    console.log(options)

    var passwordPool = [];
    console.log(passwordPool)

    if (options.specialCharacters) {
        for (i = 0; i < specialOnly.length; ++i) {
            passwordPool.push(specialOnly[i]);
        }
    } 
    if (options.numeric) {
        for (i = 0; i < numberOnly.length; ++i) {
        passwordPool.push(numberOnly[i]);
        }
    }
    if (options.lowerCase) {
        for (i = 0; i < lowercaseOnly.length; ++i) {
        passwordPool.push(lowercaseOnly[i]);
        }
    }
    if (options.upperCase) {
        for (i = 0; i < uppercaseOnly.length; ++i) {
        passwordPool.push(uppercaseOnly[i]);
        }
    }

    var finalPassword = [];

    for (let i = 0; i < options.length; ++i) {
        var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
         finalPassword.push(passwordPool[randomPicker])
    }

    console.log(finalPassword)

    var superFinal = finalPassword.join('');
    console.log(superFinal)

    document.getElementById("display").textContent = superFinal;
}


var password = "";

function copytoClipboard() {

  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Your password has now been copied to the clipboard");

}

generatePasswordButton.addEventListener('click', generatePassword);






