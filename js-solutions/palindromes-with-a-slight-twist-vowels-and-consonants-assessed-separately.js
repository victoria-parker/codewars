/* Palindromes with a slight twist: vowels & consonants assessed separately
Given a string, we'd like to know whether the vowels, consonants or both (assessed separately) are the same backwards as they are forwards. See examples at the bottom of this description.

The test should be case-insensitive, and should only assess letters, ignoring spaces, numbers and other non-letter characters ("_" "*" " " "-"). Vowels are AEIOU. The letter Y is a consonant for this exercise.

If the string doesn't have the same sequence of consonants or vowels backwards, we want to return "neither". If only the vowels are palindromic, return "vowel". If only the consonants are palindromic, return "consonant". If the vowels and the consonants in the string are palindromic, return "both".

You can assume that all test cases will contain at least one vowel and one consonant.

Enjoy!
*/

function palindrome(str) {
  //set to lower case
  let strL=str.toLowerCase()
  
  //set consonants
  let consonants=strL.match(/[bcdfghjklmnpqrstvwxyz]/g) 
  
  //set vowels
  let vowels=strL.match(/[aeiou]/g) 
  
  
  //helper function
  function isPalindrome(arr){
    
    if(arr == null){
      return false
    }
    
    for(let i=0; i < arr.length/2; i++){
      if(arr[i] != arr[arr.length-1-i]){
        return false
      }
    }
    return true
  }
  
  //check for palindromes and returns
  if(isPalindrome(consonants) && isPalindrome(vowels)){
    return "both";
  }else if(isPalindrome(consonants) && !isPalindrome(vowels)){

    return "consonant";
  }else if(!isPalindrome(consonants) && isPalindrome(vowels)){
    
    return "vowel";      
  }
  
  return "neither";
}

