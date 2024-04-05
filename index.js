/* 
  reverse the input string
  isPalindrome function
  conditional statement

*/
// algorithim
function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/*
  The reverseString function takes a string as input
  The isPalindrome function checks if a given string is a palindrome
  custom tests demonstrate the functionality of the isPalindrome function by testing various strings.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  //custom tests 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("nun"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("radar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));

  console.log("");

}

module.exports = isPalindrome;
