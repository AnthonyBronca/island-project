function getNeighbors(row, col, graph) {
  let neighbors = [];
  // let top = [row-1][col]
  // let currentPos = [[row][col]]; // <- current position
  //if we are in a corner spot (define coners)

  if (row > 0) {
    let top = graph[row - 1][col];
    if (top === 1) {
      neighbors.push([row - 1, col]);
    }
  }

  if (row < graph.length - 1) {
    let bottom = graph[row + 1][col];
    if (bottom) {
      if (bottom === 1) {
        neighbors.push([row + 1, col]);
      }
    }
  }

  if (col > 0) {
    let left = graph[row][col - 1];
    if (left) {
      if (left === 1) {
        neighbors.push([row, col - 1]);
      }
    }
  }

  if (col < graph[0].length) {
    let right = graph[row][col + 1];
    if (right) {
      if (right === 1) {
        neighbors.push([row, col + 1]);
      }
    }
  }

  return neighbors;
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  let start = [row, col];
  const stack = [start];

  // Put the stringified starting node in visited
  visited.add(start.toString());

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length) {
    console.log(stack);
    // Pop the first node
    let path = stack.pop();
    // [row, col]

    // DO THE THING (increment size by 1)
    size++;

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    let neighbors = getNeighbors(path[0], path[1], graph);

    const filteredNeighbors = neighbors.filter((neighbor) => {
      if (visited.has(neighbor.toString())) {
        return false;
      } else {
        return true;
      }
    });

    filteredNeighbors.forEach((neighbor) => {
      // HINT: Remember, you're storing your visited nodes as strings!
      visited.add(neighbor.toString());
      stack.push(neighbor);
    });
  }

  // return size
  return size;
  // Your code here
}
let matrix = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1],
];
console.log(getNeighbors(1, 1, matrix)); // => [0, 1], [1, 2], [2, 1]
// console.log(getNeighbors(0, 0, matrix)); // => [0, 1]

module.exports = [getNeighbors, islandSize];
