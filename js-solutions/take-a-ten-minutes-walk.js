/* Take a Ten Minutes Walk
DESCRIPTION:
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

ARRAYS FUNDAMENTALS 
*/
//i:array with strings containing direction letters ('n', 's', 'e', or 'w' only)
//o:true or false, evaluating if it takes 10 min, anf if it brings you back to start point
function isValidWalk(walk) {
    //First it evaluates if the walk takes 10 min
    if(walk.length != 10){
      return false
    }
    
    //To check if the walk takes me back to the starting point there needs to be the same amount of n as s, and the same amount of w as e
    let checkNandS=walk.filter(e=>e=='n').length == walk.filter(e=>e=='s').length
    let checkWandE=walk.filter(e=>e=='w').length == walk.filter(e=>e=='e').length
    
    //if the two conditions meet it returns true and if not false
    return checkNandS && checkWandE ? true : false
  }