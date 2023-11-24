/* Sum of two lowest positive integers
DESCRIPTION:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

ARRAYS FUNDAMENTALS 
*/

function sumTwoSmallestNumbers(numbers) {  
    //I sort the numbers to have in the first 2 positions the minimums.
    numbers.sort((a,b)=>a-b)
    
    //I sum the two first and return it
    return numbers[0]+numbers[1]
  }