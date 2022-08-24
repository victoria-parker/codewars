/* Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6] */

function divisibleBy(numbers, divisor){
    //  First I create acc variable to store the elements that are divisible by the divisor
      let acc=[]
     
    //  Second I iterate through the array and check if the pass the condition, if they do I store them in the acc array
     for(let i=0;i<numbers.length;i++){
       if (numbers[i] % divisor === 0){
         acc.push(numbers[i])
       }
     }
    //   Third I return the array with the elements that passed the condition 
      return acc
    }