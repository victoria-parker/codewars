/* Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

STRINGSDATA STRUCTURESFUNDAMENTALS
*/

function isPangram(string){
    let uniqueLetters=Array.from(new Set(string.toLowerCase())).filter(e=> e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122)
    return uniqueLetters.length == 26
}