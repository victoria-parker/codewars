/* Logical calculator

DESCRIPTION:
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).

ARRAYS FUNDAMENTALS 
*/

function logicalCalc(array, op){
  //First I set a variable with the first value of the array that will hold the result in the end  
  let res=array[0]
  
  //Then I loop through the array and compare the current element with the previous one. That's why I set up earlier a variable with the first value. To compare it checks which logical operator is needed to do according the op parameter.
  for(let i=1;i<array.length;i++){
    if(op=='AND'){
      res=res && array[i]  
    }else if(op=='OR'){
      res=res || array[i]
    }else if(op=='XOR'){
      res == array[i] ? res=false : res=true
    }
  }
  //Then it returns the result
  return res
}
