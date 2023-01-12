/* Shortest Word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

FUNDAMENTALS
*/

function findShort(s){
    let arr=s.split(' ')
    
    arr.sort((a,b)=>a.length - b.length)
    
    return arr[0].length
}


// function findShort(s){
//     let arr=s.split(' ')
//     let minWord=arr[0].length
    
//     for(let i=0;i<arr.length;i++){
//       if(arr[i].length < minWord){
//         minWord=arr[i].length
//       }
//     }
    
//     return minWord
// }

