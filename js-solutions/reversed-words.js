/* Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
 */

function reverseWords(str){
  
    //First change the string into an array of words with the split method
    let arr=str.split(' ')
    
    //Then reverse the array with the reverse method
    arr.reverse()
    
    //Then change the array into a string with the join method
    let strReversed=arr.join(' ')
    
    //Finally return the string reversed
    return strReversed;
  }