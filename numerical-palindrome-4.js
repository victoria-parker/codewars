/* Numerical Palindrome #4

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.

For this kata, single digit numbers will NOT be considered numerical palindromes.

Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.

palindrome(8) => 11
palindrome(281) => 282 
palindrome(1029) => 1001
palindrome(1221) => 1221
palindrome("1221") => "Not valid"

*/

function palindrome(num) {
  
    //check if valid
    if(typeof num == 'string' || num < 0){
      return "Not valid"
    }
    
    //check if lower or equal to 10
    if(num <= 10){
      return 11
    }
    
    //helper function check if palindrome
    function checkPalindrome(number){
      let arr=[...number.toString()]
      return arr.every((char,index)=>char == arr[arr.length-index-1])
    }
    
    //check if num is palindrome
    if(checkPalindrome(num)){
      return num
    }
    
    //search of closest palindrome
    let numup=num+1
    let numdown=num-1
    let palindromefound=false;
    
    while(!palindromefound){
  
      if(checkPalindrome(numup)){
        palindromefound=true
        return numup
      }else{
        numup++
      }
  
      if(checkPalindrome(numdown)){
        palindromefound=true
        return numdown
      }else{
        numdown--
      }
    }
    
}

console.log(palindrome(281))