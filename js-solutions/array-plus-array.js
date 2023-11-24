/*  Array plus array
DESCRIPTION:
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

FUNDAMENTALSARRAYSDEBUGGING
 */
function arrayPlusArray(arr1, arr2) {
    //I use the concat method to make one array with the two passed and I use the reduce method to sum the values.
    return arr1.concat(arr2).reduce((acc,val)=>acc+val,0); 
  }

console.log(arrayPlusArray([1,2], [3,4,5]))