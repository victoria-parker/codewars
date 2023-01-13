/* Simple Fun #141: Hamming Distance
DESCRIPTION:
Task
The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

Example
For a = 25, b= 87, the result should be 4

25: 00011001
87: 01010111
The hamming distance between these two would be 4 ( the 2nd, 5th, 6th, 7th bit ).

Input/Output
[input] integer a
First Number. 1 <= a <= 2^20

[input] integer b
Second Number. 1 <= b <= 2^20

[output] an integer
Hamming Distance

PUZZLES
*/

function hammingDistance (a, b) {
    //convert them to binary
    let binA=a.toString(2)
    let binB=b.toString(2)
    
    //set equal bits
    if(binA.length < binB.length){
      binA="0".repeat(binB.length-binA.length).concat(binA)
    }else if(binA.length > binB.length){
      binB="0".repeat(binA.length-binB.length).concat(binB)
    }
    
    //set counter
    let counter=0
    
    //loop and compare
    for(let i=0; i < binA.length;i++){
      if(binA[i] != binB[i]){
        counter++
      }
    }
  
    return counter
}