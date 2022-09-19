/* Sum Mixed Array
DESCRIPTION:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
    //First I use the map method to get an array where all the elements are number as they get converted with the Number() wrapper
    //Then I use the reduce method to get the sum of all the elements in the array
   return x.map(val=>Number(val)).reduce((acc,val)=>acc+val)
  }