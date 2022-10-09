/* Row Weights 
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/

//i:array with integers, not empty, positive integers
//o: array with 2 elements, the first one with the weight team 1 and the second one the weight of team 2
function rowWeights(array){
    //in case the array has only one element it will return the value and 0
    if(array.length == 1){
      return [...array,0]
    }

    //If the array has more than one element: To get the sum of each team I will use the reduce method with a conditional that checks if the index is even or odd. The even indexes will we team 1 and the odds will be them 2.
    //sum the total weight of even indexes (team 1)
    let weightTeam1=array.reduce((acc,val,index)=>index % 2 == 0 ? acc+val : acc,0)
    
    //sum the total weight of odd indexes  (team 2)
    let weightTeam2=array.reduce((acc,val,index)=>index % 2 != 0 ? acc+val : acc,0)
    
    //Then the function will returns the total sums into an array as requested.
    return [weightTeam1,weightTeam2]  
  }

console.log(rowWeights([100,50]))