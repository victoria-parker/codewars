/* Count by X 
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10] */

function countBy(x, n) {
    //First I have the accumulator array to store the values and return it
    let z = [];
    
    //Then I iterate to create a sequence of numbers. I start from 1 as the instruction says that the numbers should be greater than 0. The limit of the iteration is going to be then number given n and each number of the sequence is multplied by x as requested. 
    for(let i=1; i <= n; i++){
      z.push(i*x)
    }
    //Lastly I return the accumulator array where I stored the values
    return z;
  }