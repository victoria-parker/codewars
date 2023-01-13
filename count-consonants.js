/* Count consonants
DESCRIPTION:
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

STRINGS FUNDAMENTALS
*/

function consonantCount(str) {
    let consonants=str.match(/[bcdfghjklmnpqrstvwxyz]/gi)
    return consonants ? consonants.length : 0
}