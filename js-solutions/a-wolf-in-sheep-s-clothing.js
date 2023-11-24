/* A wolf in sheep's clothing
DESCRIPTION:
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

FUNDAMENTALS ARRAYS
*/
function warnTheSheep(queue) {
    //First I reverse the queue so I can work with the index numbers comfortably
    queue.reverse()
    
    //Then I iterate through the array in search of the wolf and return the strings according to the position of the wolf
    for(let i=0;i<queue.length;i++){

      if(i==0 && queue[i] == 'wolf' ){
        
        return "Pls go away and stop eating my sheep"
      
      }else if(queue[i] == 'wolf'){
      
        return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
    
      }
    }
}

console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']))