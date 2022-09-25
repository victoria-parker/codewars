/* Removing Elements
DESCRIPTION:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
    //I use the filter method to get an array with every second element removed by checking if the index is even or not.
    return arr.filter((elment,index)=> index % 2 == 0)
}