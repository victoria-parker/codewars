/* Multiply Word in String
You are to write a function that takes a string as its first parameter. This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string",3,5) 

Ex.
modifyMultiply ("Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10) ==> "that-that-that-that-that-that-that-that-that-that"
*/

function modifyMultiply (str,loc,num) {
    let arr=str.split(' ')
    let word=arr[loc]
    let arrw=Array.from({length:num},(val)=>val=word)
    return arrw.join('-')
} 