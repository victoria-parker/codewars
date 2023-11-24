/* Sum of odd numbers
Given the triangle of consecutive odd numbers:

             1   
          3     5   
       7     9    11     
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 
*/

function rowSumOddNumbers(n) {

    //I set a variable that will store the number to push 
    let num=1
    //I set an acc variable called triangle where I store the arrays that represent each row
    let triangle=[]

    //With a loop I push each row into the triangle.The amount of iterations are tied to the number of rows given by n 
    for(let i=1;i <= n;i++){

        //To create each row I create a variable called row where with a nested for loop I push the num variable set up earlier and I update the value of num for the next iteration. 
        let row=[]
        for(let j=1;j<=i;j++){
            row.push(num)
            num+=2
        }
        triangle.push(row)
    }
    //To return the sum of the numbers in the nth triangle I use the reduce method
    return triangle[n-1].reduce((acc,val)=>acc+val,0)
}


/* 
Other option seen on results easy and way faster

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
*/