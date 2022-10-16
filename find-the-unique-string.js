/* Find the unique string
DESCRIPTION:
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.
*/

function findUniq(arr) {
    //First I convert the strings in the array in lower case to compare them easily
    let arrLower=arr.map(e=>e.toLowerCase())
    
    //Then I create an array that contains the single characters that are in all the strings
    let arrSingleChar=Array.from(new Set(arrLower.map(e=>e.split('')).flat()))
       
    //I set a variable to store the index of the unique string 
    let uniqueStrIndex;

    //Then I loop through the single characters and I count how many time do they repeat. If they only repeat once it means they are the unique string so I break the loop.
    for(let i=0; i<arrSingleChar.length;i++){

        let amountOfRep=arr.map(e=>e.toLowerCase()).filter(e=>e.includes(arrSingleChar[i])).length
        
        if(amountOfRep == 1){
            let uniqueChar=arrSingleChar[i]
            uniqueStrIndex=arrLower.findIndex(e=>e.includes(uniqueChar))
            break;
        } 
    }

    //I return the unique string from the arr array(that has the original string that may have capital letters) 
    return arr[uniqueStrIndex]    
}
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]))

