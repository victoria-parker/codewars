/* Is there a vowel in there?
DESCRIPTION:
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

FUNDAMENTALS STRINGS ARRAYS
*/

function isVow(a){
    //The map method returns an array that has the numbers and the vowels.
    //To check if the numbers are vowels, it uses the String.fromCharCode() method to get the character that it's associated with. if the string is included in the array of vowels, then it is a vowel and it's returned to the array. If it is not, then the number is returned to the array 
    return a.map(e=> ['a','e','i','o','u'].includes(String.fromCharCode(e)) ? String.fromCharCode(e) : e )
  }