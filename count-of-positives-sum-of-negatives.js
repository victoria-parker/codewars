/* Count of positives / sum of negatives
DESCRIPTION:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

  
function countPositivesSumNegatives(input) {
    //for null cases and arrays of zeros
    if(input == null || input.every(val=>val==0)){
        return []
    }
    
    // I use the filter method to make an array with only positive values and then I get the lenght to know the amount of positive numbers
    let positives=input.filter(val=> val > 0).length
    
    //I use the filter method first to have an array with only the negative values and the I use the reduce method to sum them.
    let negativeSum=input.filter(val=> val < 0).reduce((acc,val)=>acc+val,0)
        
    //Then I return the array with the two values calculated
    return [positives,negativeSum]
}
