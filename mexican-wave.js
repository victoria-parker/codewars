/* Mexican Wave
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Good luck and enjoy! 
*/

//i:string, may have more than one word(then may have spaces)
//o:array that repeats the string and where each letter will have a capital letter acording to its position
function wave(str){
    //First I split the string into an array
    let arrstr=str.split('')
    //I set up an acc variable to store the string with capitalized letters
    let acc=[]

    //I loop through the array that contains each letter of the string
    for(let i=0;i<arrstr.length;i++){
        //if the element is a space it should continue
        if(arrstr[i]== ' ') continue
        //sets a string that contains a capitalized letter and pushes it into the acc array
        let strWithCap=arrstr.map((el,ind)=>{return ind==i ? el.toUpperCase() : el }).join('')
        acc.push(strWithCap)
    }
    return acc
}

console.log(wave('two words'))//["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]