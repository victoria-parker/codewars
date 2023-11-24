/* Sort the odd
DESCRIPTION:
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
FUNDAMENTALS ARRAYS SORTING 
*/
function sortArray(array) {
    //First I create an array with only the even and I leave the places where the odd numbers were and will be
    let arrOfEven=array.map(e=>e % 2 == 0 ? e : '_')

    //Then I set an array with all the odd numbers we need to put in order and I sort them
    let arrOfOdd=array.filter(e=>e % 2 != 0 ).sort((a,b)=>a-b)
    
    //Then I create the final array were I put the odd numbers in the spaces that were left for them in the sorted order
    let sortedOddFullArr=arrOfEven.map(e=> e == '_' ? arrOfOdd.shift() : e)
    
    //Then return the final array
    return sortedOddFullArr
}
