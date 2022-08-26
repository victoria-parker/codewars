/* What is between
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4] */

function between(a, b) {
    // your code here
    //First I create the accumulation array to store the sequence of numbers
    let acc=[]
    
    //Then I create the sequence using a while loop. The first value is going to be a, and then a is incremented. The last value is going to be b
    while(a <= b){
      acc.push(a)
      a++
    }
    //Finally i return the acc array that contain the sequence of numbers between a to b
    return acc
  }
