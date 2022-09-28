/* Well of Ideas - Easy Version

DESCRIPTION:

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

FUNDAMENTALS ARRAYS STRINGS REFACTORING
*/

function well(x){
  
    //I use a filter method to search for good ideas, then I ge the length of it and set that equal to a amount variable
     let amount=x.filter(val=>val=='good').length
    
    //Then I use a ternary to return the string according to the result of the count
    return amount == 0 ? 'Fail!' : amount <= 2 ? 'Publish!' :  'I smell a series!' 
}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))