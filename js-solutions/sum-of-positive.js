/* Sum of positive
DESCRIPTION:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

ARRAYSFUNDAMENTALS
 */

function positiveSum(arr) {
    //First it filters the elements to keep only the positive values and then with the reduce method it sums up the values.
    return arr.filter(val=>val>0).reduce((acc,val)=> acc+val,0)  
}
console.log(positiveSum([1,-2,3]))


