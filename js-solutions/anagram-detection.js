/* Anagram Detection
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

STRINGS FUNDAMENTALS
*/

//comparing map way of solving it
var isAnagram = function(test, original) {

    if(test.length != original.length) return false;


    const lowerTest=test.toLowerCase()
    const lowerOriginal=original.toLowerCase()

    const testMap={}
    const originalMap={}
        
    for(let letter of lowerTest){
        if(!testMap.hasOwnProperty(letter)){
            testMap[letter]=1
        }else{
            testMap[letter]+=1
        }
    }

    for(let letter of lowerOriginal){
        if(!originalMap.hasOwnProperty(letter)){
            originalMap[letter]=1
        }else{
            originalMap[letter]+=1
        }
    }

    for(let letter in testMap){
        if(testMap[letter] != originalMap[letter]){
            return false
        }
    }

    return true
};


//Sort method of solving
// var isAnagram = function(test, original) {
//   const sortedTest=[...test.toLowerCase()].sort().join('')
//   const sortedOriginal=[...original.toLowerCase()].sort().join('')

//   return sortedTest == sortedOriginal
// };
  