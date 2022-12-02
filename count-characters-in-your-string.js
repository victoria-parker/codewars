/* Count characters in your string 
DESCRIPTION:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

STRINGS FUNDAMENTALS
*/

function count (string) {  
  
    let acc={}
    
    for(let letter of string){
      acc.hasOwnProperty(letter) ? acc[letter]+=1 : acc[letter]=1
    }
    
    return acc
}