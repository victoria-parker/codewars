/* Looking for a benefactor
DESCRIPTION:
The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.

if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

Could you help him?

Task
The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

Should the last donation be a non positive number (<= 0) John wants us:

to return:

Nothing in Haskell, Elm
None in F#, Ocaml, Rust, Scala
-1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
or to throw an error (some examples for such a case):

IllegalArgumentException() in Clojure, Java
ArgumentException() in C#
echo ERROR in Shell
argument-error in Racket
std::invalid_argument in C++
ValueError in Python
So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.

Notes:
all donations and navg are numbers (integers or floats), arr can be empty.
See examples below and "Sample Tests" to see which return is to be done.
new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
new_avg([14, 30, 5, 7, 9, 11, 15], 2) 
should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 
or return `-1` or ERROR or Nothing or None depending on the language.
FUNDAMENTALS ARRAYS 
*/

//i: array of donations(integer/floats), avg to reach. the array may be empty
//o: num integer(rounded up) of the expected donation to reach the avg. 
//if num is not positive then return error

function newAvg(arr, newavg) {
    
    //If the array is empty, then it should return the newavg as that is the amount it will need to get that average
    if(!arr.length) return newavg
    
    //If the array is not empty, then it needs to calculate the following values: 
    
    //Amount of donation up to that point by getting the length of the array
    let amountDonations=arr.length 
    
    //The total sum of donations up to that point. It gets it with the reduce method
    let sumDonations=arr.reduce((acc,val)=>acc+val)
    
    //The average up to that point
    let oldavg=sumDonations/amountDonations
    
    //If the average up to that point is bigger than the new average then it will throw an error as the new average should be bigger
    if(oldavg > newavg){
      throw new Error("Expected New Average is too low")  
    }
    
    //With the values calculated previously, it calculates the new donation rounded up as requested and returns it.
    let newDonation = Math.ceil(newavg * (amountDonations+1) - sumDonations)
    
    return newDonation
    
}