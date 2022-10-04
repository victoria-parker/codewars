/* Remove First and Last Character 

DESCRIPTION:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

STRINGS FUNDAMENTALS
*/

function removeChar(str){
    //I use the slice method to slice the string from the second character up the last one without including it 
     return str.slice(1,str.length-1)
   };