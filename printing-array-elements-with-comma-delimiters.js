/* Printing Array elements with Comma delimiters
DESCRIPTION:
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level
*/

function printArray(array){
    //It returns a string made from the array with the join() method with commas set as delimiters
    return array.join(',')
}