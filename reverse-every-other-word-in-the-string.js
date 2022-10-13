/* Reverse every other word in the string
DESCRIPTION:
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

ARRAYS FUNDAMENTALS 
*/

//i:string
//o: string where every other word is reversed like this => siht
function reverse(str){

    //in case its empty or just white spaces
     if(str.trim().length == 0){
        return ''
    }

    //turn the string into an array
    let strArray=str.split(' ')

    //it maps the array and if the index is odd it will reverse that word
    let arrayWithReverse= strArray.map((element,index)=>index % 2 == 0 ? element : element.split('').reverse().join(''))

    //it turns back the array into a string with the reversed words and returns it
    return arrayWithReverse.join(' ')
}