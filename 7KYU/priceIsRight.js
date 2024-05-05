function priceIsRight(arr, target) {
    // Sort the array in ascending order
      arr.sort((a, b) => a - b);
  
      // Initialize the variable to store the result
      let result;
  
      // Iterate through the sorted array
      for (let i = 0; i < arr.length; i++) {
          // If the current number is less than or equal to the target, update the result
          if (arr[i] <= target) {
              result = arr[i];
          } else {
              // Since the array is sorted, if we encounter a number greater than the target, we can break the loop
              break;
          }
      }
  
      // Return the result
      return result;
  }