/* Maze Runner

DESCRIPTION:
Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
Good luck, and stay safe! 
*/

function mazeRunner(maze, directions) {

        //First, I find the starting point
        const startArrayIndex=maze.findIndex(e=>e.includes(2))
        const startElementInArrayIndex=maze[startArrayIndex].indexOf(2)
        
        //I set temporal variables that represent the moves vertically and horizontally
        let verticalLocation=startArrayIndex
        let horizontalLocation=startElementInArrayIndex

        //I use a for loop to move in each direction given by the directions array        
        for(let i=0;i<directions.length;i++){
        
        if(directions[i] == 'N'){
                verticalLocation-=1
        }else if(directions[i] == 'S'){
                verticalLocation+=1
        }else if(directions[i] == 'W'){
                horizontalLocation-=1
        }else if(directions[i] == 'E'){
                horizontalLocation+=1
        }
        
        //I compare my current location to what is in the maze array and if I encounter an obstacle or I am outside then it returns dead. If it encounters 3 then finish
        if(verticalLocation < 0 || verticalLocation >= maze.length|| horizontalLocation < 0 || horizontalLocation >= maze[verticalLocation].length || maze[verticalLocation][horizontalLocation] == 1){
                return "Dead"
        }else if(maze[verticalLocation][horizontalLocation] == 3){
                return "Finish"
        }
        
        }

        //If the for loop finishes and I haven't found the finish or I haven't ended outside the maze then it returns Lost
        return "Lost"
}