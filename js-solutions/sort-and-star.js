/* Sort and Star
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
    //First I use the sort method to sort it alphabetically
    s.sort()
    
    //Then I take the first value and I split it as an array to separate each letter and then I turn it into a string again but joining the *** in between each letter
    let staredString=s[0].split('').join('***')

    //Finally I return the string created above
    return staredString
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))

