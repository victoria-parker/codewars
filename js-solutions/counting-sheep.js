/* Counting sheep...
DESCRIPTION:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

ARRAYS FUNDAMENTALS
*/

function countSheeps(arrayOfSheep) {
    // I use a ternary to check if arrayOfSheep is null/undefine and if it's not it filters the true values an counts them with the length property
    return arrayOfSheep ? arrayOfSheep.filter(val=>val==true).length : 0 
  }