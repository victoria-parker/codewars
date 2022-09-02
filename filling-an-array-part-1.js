/* Filling an array (part 1)
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/

const arr = (N) => {
    //First I create the empty array and set the value of the length of the array, if the argument is not passed, it sets it to zero.
        let arr=[];
        let length= N ?? 0; // As codewars didn't recognize ?? I used : N ? N : 0 
    //Then with a for loop it adds the amount of elements according to the parameter
      for(let i=0; i < length; i++){
          arr.push(i)
      }
    //The function return the array and if there is no argument when the function is called, it will return the empty array created at the beginning
      return arr
  };

  console.log(arr())