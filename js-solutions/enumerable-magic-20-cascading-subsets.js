/* Enumerable Magic #20 - Cascading Subsets
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.

FUNDAMENTALS LISTS DATA STRUCTURES ARRAYS ALGORITHMS
*/
function eachCons(array, n) {
	//set a variable to store the subarrays
  let arr=[]
  
  //loop through the array and slice from the curent value up to n counting from the current value
  for(let i=0; i < array.length;i++){
    arr.push(array.slice(i,n+i))
  }
  
  //returns the slices but filtering first in case the last one didn't get to have n as length
  return arr.filter(e=>e.length == n);
}
