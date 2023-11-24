/* Remove exclamation marks
DESCRIPTION:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

FUNDAMENTALSSTRINGS
*/

function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
}





//not supported by codewars
// function removeExclamationMarks(s) {
//     return s.replaceAll('!','');
// }

console.log(removeExclamationMarks("Hello World!"))