function mazeRunner(maze, directions) {
    let startRow, startCol;
  
  
    // Find the starting point (2) in the maze
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 2) {
          startRow = i;
          startCol = j;
          break;
        }
      }
    }
  
    let currentRow = startRow;
    let currentCol = startCol;
  
    for (let i = 0; i < directions.length; i++) {
      switch (directions[i]) {
        case "N":
          currentRow--;
          break;
        case "S":
          currentRow++;
          break;
        case "W":
          currentCol--;
          break;
        case "E":
          currentCol++;
          break;
      }
  
      // Check if the new position is within the maze bounds
      if (
        currentRow < 0 ||
        currentRow >= maze.length ||
        currentCol < 0 ||
        currentCol >= maze[currentRow].length
      ) {
        return "Dead";
      }
  
      // Check if the new position is a wall (1)
      if (maze[currentRow][currentCol] === 1) {
        return "Dead";
      }
  
      // Check if the new position is the finish point (3)
      if (maze[currentRow][currentCol] === 3) {
        return "Finish";
      }
    }
  
    // If all moves are used and still inside the maze
    return "Lost";
  }
  
  // Example usage:
  const maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
  ];
  
  const directions = ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"];
  
  mazeRunner(maze, directions)  // Output: "Finish"
  
    // 0 = Safe place to walk
    // 1 = Wall
    // 2 = Start Point
    // 3 = Finish Point