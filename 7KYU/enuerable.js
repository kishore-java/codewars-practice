function all( sequence, testFunction ){
    // ...
    if (sequence.length === 0) {
          return true;
      }
  
      // Check if the testFunction returns true for every element in the sequence
      for (const element of sequence) {
          if (!testFunction(element)) {
              return false;
          }
      }
  
      // If the loop completes without returning false, return true
      return true;
  }