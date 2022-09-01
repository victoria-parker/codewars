/*  Beginner - Reduce but Grow
DESCRIPTION:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

function grow(x){
    //I use the reduce method to multiply the values of the array and I return the result
    return x.reduce((acc,value)=>acc*value,1)
  }