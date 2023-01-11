/* Is it a palindrome?

DESCRIPTION:
Write a function that checks if a given string (case insensitive) is a palindrome.

FUNDAMENTALS
*/

function isPalindrome(x) {
    let chars=[...x.toLowerCase()]
    
    return chars.every((char,index)=>char === chars[chars.length-1-index])
  
  }