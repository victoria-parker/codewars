/* Testing 1-2-3
DESCRIPTION:
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] 
*/

var number=function(array){
    //I use the map method to return a new array that uses the index parameter + 1 to number the strings starting from 1 and it concatenates it with the elements value in a literal string
    return array.map((item,index)=>{return `${index+1}: ${item}`})
}