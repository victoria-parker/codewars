/* Swap Values
DESCRIPTION:
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

DEBUGGING ARRAYS FUNDAMENTALS 
*/

function swapValues(args) {
    //I comment out the args variable, and i set an args parameter
    //var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
   //I return the args array that has been modified
    return args
}

console.log(swapValues([1,2]))