function order(words){
    if (!words) {
          return "";
      }
  
      // Split the input string into an array of words
      const wordArray = words.split(" ");
  
      // Sort the array based on the number in each word
      const sortedArray = wordArray.sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)[0], 10);
          const numB = parseInt(b.match(/\d+/)[0], 10);
          return numA - numB;
      });
  
      // Join the sorted array into a string
      const result = sortedArray.join(" ");
  
      return result;
  }