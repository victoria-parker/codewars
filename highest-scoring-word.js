/* Highest Scoring Word

DESCRIPTION:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

FUNDAMENTALS STRINGS ARRAYS
*/

//P:str, lowercase letters, all valid 
//R:str

function high(x){
  
    //First I split the string into an array
    const words=x.split(' ')
    
    //Then I set an array where I will store the highest score at index 0 and the index of word at index 1
    let highestScore=[0,0]
    
    
    //Then I will loop through words and I will split each word to sum the points and add them to the highestScore variable when applicable.
    for(let i=0;i<words.length;i++){
        
        //split the word in letters
        let letters=words[i].split('')

        //I will need and array with the alphabet to compare with each letter. I will use the indexes + 1 of the letters as the points 
        const alphabet=[...'abcdefghijklmnopqrstuvwxyz']

        //To calculate the score I use the reduce method 
        let score=letters.reduce((acc,val)=>{ 
            return acc + alphabet.indexOf(val) + 1
        },0)
        

        //Then I compare if the score is the highest and if it is, I store the details in the array I set up above
        if(highestScore[0] < score){
            highestScore=[score,i]
        }
    }
    //Then I  return the one with more points using the index I stored in the highestScore array
    return words[highestScore[1]]
}

console.log(high('man i need a taxi up to ubud'))