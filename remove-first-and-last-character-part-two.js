/* Remove First and Last Character Part Two

DESCRIPTION:

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
FUNDAMENTALS ARRAYS STRINGS 
*/

function array(str){
  //First it checks if the str has enough characters to take the first and second one if not it returns null
  if(str.length < 5 ) return null

  //Then it split the string into an array using the split method and removing the commas as it uses as separator.
  let arr= str.split(',')

  //Then it slices the array without including the first and last elements
  let sliced=arr.slice(1,arr.length-1)
  //Then it joins them into a string
  let stringwSpaces=sliced.join(' ')

  //In case the slice it left us with an empty string, it uses a ternary to check and if that's the case it returns null
  return stringwSpaces ? stringwSpaces : null
}

console.log(array('1,2,3'))