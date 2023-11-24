/* Count Repeats
Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
*/

function countRepeats(str) {
    
    let arr=[...str]
    
    let sum=0
    
    for(let i=1;i < arr.length; i++){
      
        if(arr[i-1] == arr[i]){
          sum++
      }
    }
    return sum
}