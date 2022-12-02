/* Build Tower
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  
    let length=nFloors*2-1
    let base='*'.repeat(length)
    let tower=[base]
    
    for(let i=1; i < nFloors ; i++){
      //create each floor
      length-=2
      let spaces=" ".repeat(i) 
      let floor=['*'.repeat(length)]
      floor.unshift(spaces)
      floor.push(spaces)
      
      //put in in the tower
      tower.unshift(floor.join(''))
    }
    
    return tower
  }
  