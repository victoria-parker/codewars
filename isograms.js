/* Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

STRINGS FUNDAMENTALS
*/

function isIsogram(str){
  
    let word=str.toLowerCase()
    
    for(let i=0; i < word.length;i++){
      
      if(word.indexOf(word[i]) != word.lastIndexOf(word[i])){
        return false
      }
    }
    return true
}