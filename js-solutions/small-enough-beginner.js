/* Small enough? - Beginner
DESCRIPTION:
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

FUNDAMENTALS ARRAYS 

*/

function smallEnough(a, limit){
    //It uses the every method to check if every value es equal or bellow the limit 
    return a.every(e=>e <= limit)
  }