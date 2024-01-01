function dirReduc(arr) {
    const oppositeDirections = {
      'NORTH': 'SOUTH',
      'SOUTH': 'NORTH',
      'EAST': 'WEST',
      'WEST': 'EAST'
    };
  
    const result = [];
  
    for (const direction of arr) {
      const lastDirection = result.pop();
  
      if (lastDirection !== oppositeDirections[direction]) {
        if (lastDirection !== undefined) {
          result.push(lastDirection);
        }
        result.push(direction);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
  console.log(dirReduc(directions));  // Output: ["WEST"]
  