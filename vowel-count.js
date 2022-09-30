/* Vowel Count

DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. 
*/

function getCount(str) {
    //First the string is converted into an array. 
    //Then with the filter method we get an array with only the vowels and we the length property we get the amount
    return str.split('').filter(e=> ['a','e','i','o','u'].includes(e)).length;
  }