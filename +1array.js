/* +1 Array
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

FUNDAMENTALSARRAYSALGORITHMS
*/

function upArray(arr){
    //checks if the values are what they should be if not returns null
    if(arr.length > 0 && arr.every(e=> e >= 0 && e < 10)){
        
        for(let i=arr.length-1;i>=0;i--){
            arr[i]+=1
    
            if(arr[i]==10){
                
                arr[i]-=10
                
                if(i==0){
                    arr.unshift(1)
                }

            }else if(arr[i]<10){
                break
            }
        }

        return arr
    }else{
        return null
    }
}

console.log(upArray([8,3,2,5,3,8,2,1,5,34,4,1,1,3,6,4,1]))
