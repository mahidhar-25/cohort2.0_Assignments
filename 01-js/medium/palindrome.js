/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str
    .split(" ")
    .join("")
    .toLowerCase()
    .replace(/[^a-zA-Z]+/g, "");
  let reverseString = [...str1].reverse().join("");
  return str1 == reverseString;
}

console.log(isPalindrome("Anna"));

module.exports = isPalindrome;
