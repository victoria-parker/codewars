/* Square(n) Sum

DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

ARRAYS LISTS FUNDAMENTALS
*/

function squareSum(numbers){
    //I use the reduce method to get the sum of the values that are squared by doing val**2
     return numbers.reduce((acc,val)=>acc + val**2,0)
   }