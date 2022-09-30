/* Reverse words 
DESCRIPTION:
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    
    //First I split the string into an array
    let arr=str.split('')
    
    //Then I set up an accumulator variable where I am going to store each letter of a word reversed order
    let acc=[]

    //Then I set up a reversed variable where I am going to store each reversed word and the spaces
    let reversed=[]

    //Then I will iterate through the array that contains the letters a spaces of the string
    for(let i=0; i < arr.length; i++){
        
        //Inside the loop it checks if the element is a space or a letter. If it's a letter it puts it in the acc array. 
        if(arr[i] != ' '){
            acc.unshift(arr[i])

        }else if(arr[i] == ' '){ //If it is a space it means the word is over so it pushes it into the reversed array and it push the space as well
            reversed.push(...acc)
            reversed.push(' ')
            acc=[] //it empties the acc array so it can start storing the next word in the next iteration
        }

        //if its the end of the array it means the last word is in the acc variable and it needs to be push to the reversed array to finish.
        if(i == arr.length-1){
            reversed.push(...acc)
        }
    
    }

    //it returns the reversed array joined into a string 
    return reversed.join('')

    
}

console.log(reverseWords("Hello world"))