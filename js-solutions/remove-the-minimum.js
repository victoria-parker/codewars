/* Remove the minimum 
DESCRIPTION:
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

//i:array of numbers integer
//o:array without the first minimum number with the lowest index
function removeSmallest(numbers) {
    //I make a copy of the array so I can use splice and not modify the orginal as requested
    let copyNum=[...numbers]
    
    //With the splice method it deletes the first min element that finds with indexOf
    copyNum.splice(numbers.indexOf(Math.min(...numbers)),1)
    
    //it returns the array without the min
    return copyNum
}

let nums=[5, 3, 2, 1, 4]
console.log(removeSmallest(nums))
