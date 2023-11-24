/* Multiplication table

DESCRIPTION:
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

ARRAYS FUNDAMENTALS
*/

//i: an integer N(size)
//o: N arrays of N length. Their elements are integers that represent multiplication tables
multiplicationTable = function(size) {
    //set acc array to store the tables
    let acc=[]
    
    //loop from 1 to size so we can create the arrays and push N arrays in the acc
    for(let i=1; i <= size ; i++){
      
      //set a table array to store each table and then push each of them into acc
      let table=[]
      
    //loop from 1 to size so we push the numbers into each array
      for(let j=1;j<=size; j++){
        
        table.push(i*j)
        //Example of what this loop is doing when i=3
        //j=1 i=3 table=[3]
        //j=2 i=3 table=[3,6]
        //j=3 i=3 table=[3,6,9]
      }
      acc.push(table)
    }
    return acc
  }