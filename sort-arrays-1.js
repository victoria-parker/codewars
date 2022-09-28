/* Sort arrays - 1
DESCRIPTION:
Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

SORTING ARRAYS FUNDAMENTALS
*/

// input: names - unsorted array
// output: sorted array
sortme = function( names ){
 //The sort method sorts the element in lexicographical order.
 return names.sort() 
}

console.log(sortme(['one', 'two', 'three' ])) // ["one", "three", "two"]