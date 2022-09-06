/* Abbreviate a Two Word Name 
DESCRIPTION:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

function abbrevName(name){
    // First I change the string into an array, then I make a new array with only the first letters using the map method and then I convert the array into a string with the join method joining them with a dot as requested. Finally I convert the string to uppercase
  return name.split(' ').map(val=>val[0]).join('.').toUpperCase()

}

console.log(abbrevName("njhpjyaMUyypn gwpySKr"))