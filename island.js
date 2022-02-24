function getNeighbors(row, col, graph) {
  let neighbors = []
  // let top = [row-1][col]
  // let currentPos = [[row][col]]; // <- current position
  //if we are in a corner spot (define coners)
if (row > 0){
  let top = graph[row - 1][col]
    if (top === 1) {
      neighbors.push([row - 1, col])
    }
  }

  let bottom = graph[row + 1][col]
  if (bottom) {
    if (bottom === 1) {
      neighbors.push([row + 1, col])
    }
  }

  let left = graph[row][col - 1]
  if (left) {
    if (left === 1) {
      neighbors.push([row, col - 1])
    }
  }
  // Check right
  let right = graph[row][col + 1]
  if (right) {
    if (right === 1) {
      neighbors.push([row, col + 1])
    }
  }

  return neighbors
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

  // Pop the first node

  // DO THE THING (increment size by 1)

  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}
let matrix = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1],
]
//console.log(getNeighbors(1, 1, matrix));
console.log(getNeighbors(0,0,matrix))


module.exports = [getNeighbors, islandSize];
