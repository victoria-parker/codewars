/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0] */

function digitize(n) {
    //first I convert the number into a string so then I can convert the string into an array of numbers
    
    let arr=n.toString().split('')
    console.log(arr)
    //Secondly I create an acc array to store the inverted array.Then I iterate through the arr and push the elements into a new array in reversed order. Before pushing the elements in the reversed array I make sure I change them into digits again.
    
    let acc=[]
    
    for(let index in arr){
      acc.unshift(Number(arr[index]))
    }
    
    //Ultimately I return the reversed array of digits
    return acc
  }

  console.log(digitize(348597))