/* String repeat

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

FUNDAMENTALS STRINGS 
*/

function repeatStr (n, s) {
    //it uses the repeat method to repeat return a string repeated n times
    return s.repeat(n);
  }