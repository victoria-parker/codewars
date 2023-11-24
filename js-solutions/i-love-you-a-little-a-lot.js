/* I love you, a little , a lot, passionately ... not at all
DESCRIPTION:
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/
function howMuchILoveYou(nbPetals) {
  
    //First I created an array containing the options 
    let arr=['I love you','a little','a lot','passionately','madly','not at all']


    //If there is not remainder left over from comparing the parameter and the length it means the last petal corresponds to the last element in the array. If the modulus finds a remainder, it take this number and substracts one of it to get the index of the element in the array.  
    
    return arr[nbPetals % arr.length === 0 ? arr.length-1 : nbPetals % arr.length - 1]
}


  
