/* Count the Monkeys!
DESCRIPTION:
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
ARRAYS FUNDAMENTALS LISTS ALGORITHMS
*/ 

function monkeyCount(n) {
    // First it creates a new array with n elements, then fills it and then with the map method it fills it with a range of numbers from one
      return new Array(n).fill(1).map((_,i)=>i+1)
}


/* 
Other way to do it to study

function monkeyCount(n) {
  return Array.from({length:n}, (_,i)=>i+1)
}

*/
