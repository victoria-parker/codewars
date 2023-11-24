/* Remove String Spaces
DESCRIPTION:

Simple, remove the spaces from the string, then return the resultant string.

FUNDAMENTALS STRINGS ARRAYS
*/

function noSpace(x){
    //I use the split method to convert the string into an array without the space and I use the join method to reconvert the array into an string but this time with no spaces.
    return x.split(' ').join('')
  }