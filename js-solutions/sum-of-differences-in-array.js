/* Sum of differences in array
DESCRIPTION:
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

ARRAYS FUNDAMENTALS
*/

function sumOfDifferences(arr) {
    //As the values in the middle cancel themselves out the best aproach is to get the difference between the max number and min number of the array. In case the length of the array is 1 or 0 it will return 0.
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
  }