/* Find the capitals
DESCRIPTION:
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
STRINGSARRAYSFUNDAMENTALS
*/

var capitals = function (word) {
	let capI=word.split('').filter((letter)=>letter.charCodeAt(0) <= 90 ).map(letter=>word.indexOf(letter))
  return capI
};