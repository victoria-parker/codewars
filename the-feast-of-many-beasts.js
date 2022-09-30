/* The Feast of Many Beasts

DESCRIPTION:
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

STRINGS FUNDAMENTALS
*/

function feast(beast, dish) {
    //To check if the word start and finish the same I use the startWith method on one of them comparing with the index 0 of the other, and the endsWith method on one of them with the last index of the other. 
      return beast.startsWith(dish[0]) && beast.endsWith(dish[dish.length-1])
    }