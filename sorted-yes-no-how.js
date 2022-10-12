/* Sorted? yes? no? how?
DESCRIPTION:
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

ARRAYS SORTING FUNDAMENTALS 
*/

function isSortedAndHow(array) {
    //It uses a ternary to check the different options and return the correct string
    //to check if the array is sorted or not it makes a copy of it and sorts it. Then it uses the every method to compare the original and the sorted.
    return [...array].sort((a,b)=>a-b).every((e,i)=> e== array[i]) ? "yes, ascending" :
           [...array].sort((a,b)=>a-b).reverse().every((e,i)=> e== array[i]) ? "yes, descending": "no"
}

console.log(isSortedAndHow([3,2,1]))

   