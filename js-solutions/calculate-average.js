/* Calculate average
DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

FUNDAMENTALS ARRAYS
*/

function findAverage(array) {
    return array.length > 0 ? array.reduce((acc,val)=>acc+val,0)/array.length : 0;
}

