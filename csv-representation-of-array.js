/* CSV representation of array
DESCRIPTION:
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values
 */

function toCsvText(array) {
    //First I create a str variable where that is going to be an accumulator for the string values of made from each array that is inside of the main array
    let str=''
    
    //Then I loop over the main array
    for(let i=0;i<array.length;i++){
      
      //I create a condition so if the array is not the last one of the main array it'll get added the \n but if it's the last one it won't
     if(i!== array.length -1){
        array[i][array[i].length-1]=array[i][array[i].length-1].toString().concat('\n')
    }
     //I covert into string each array and I concatenate the resulting string into the accumulator string I created earlier 
     array[i].join(',')
     str+=array[i]
   } 

  //Ultimately the function returns the string that was made from the strings of each array inside the main array
   return str
   
}