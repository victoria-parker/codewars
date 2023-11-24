/* Fake Binary
DESCRIPTION:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

FUNDAMENTALS STRINGS ARRAYS 
*/
function fakeBin(x){
    //First I split the string into an array and then the function maps the array where first it changes the elements into numbers and then with a ternary returns the 0 or 1 acording to if the numbers is < or > to 5. 
    let arr=x.split('').map(val=> Number(val) < 5 ? 0 : 1)
    
    //Finally it returns the digits turned into a string as requested in the description
    return arr.join('')
   
}

console.log(fakeBin('453'))