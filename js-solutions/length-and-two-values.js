/* Length and two values
DESCRIPTION:
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!

FUNDAMENTALS ARRAYS
*/

function alternate(n, firstValue, secondValue){
    return Array.from({length:n}, (val,index)=> index % 2== 0 ? firstValue : secondValue)
}