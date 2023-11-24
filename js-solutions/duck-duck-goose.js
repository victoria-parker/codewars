/* Duck Duck Goose

DESCRIPTION:
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]
ARRAYS LISTS FUNDAMENTALS 
*/

function duckDuckGoose(players, goose) {
  //set a variable to store the amount of players
  let amountOfplayers=players.length
  
  //set a variable to store the remainder
  let remainder=goose % amountOfplayers
  
  //If the remainder is 0 it means that goose is divisible by the amount of players, so the goose would be the last player. If the remainder is not zero, then the position of the goose is corresponded to the remainder-1 as the array is zero indexed.
  return remainder==0 ? players[amountOfplayers-1].name : players[remainder-1].name
}
