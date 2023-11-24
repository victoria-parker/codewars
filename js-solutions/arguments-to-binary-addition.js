/* Arguments to Binary addition

DESCRIPTION:
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it

*/

//i: array w/num, strings, empty,null
//o: sum of inside the array turned into binary as a string
function arr2bin(arr){
    //It sums the numbers of the array with a reduce() method. In it, if the element is not a number it sums 0 to the acc variable. Then it converts the number into a string in binary. It does it by giving the radix 2 to the toString() method.
    return arr.reduce((acc,val) => typeof val == 'number' ? acc+val : acc+0 ,0).toString(2)    
}

console.log(arr2bin([1,2,'a']))