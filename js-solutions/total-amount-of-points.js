/* Total amount of points
DESCRIPTION:
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point

Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
FUNDAMENTALS MATHEMATICS ARRAYS
*/

function points(games) {
    //First I set an acc variable to store the points
    let totalPoints=0
    
    //Then the functions loops through games, it splits each string into an array with the x and the y value and it compares them to set the points accordingly
    for(let i=0;i<games.length;i++){
      
      let arr=games[i].split(':')
      
      //as the elements are string it uses the unary operator to convert them to numbers
      if(+arr[0] > +arr[1]){

            totalPoints+=3

      }else if(+arr[0] == +arr[1]){

            totalPoints+=1 

      }
    }

    //Finally it returns the total points
    return totalPoints
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))