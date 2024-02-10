
function maxTriSum(numbers){
    
      //your code here  
      const uniqueNumbers = [...new Set(numbers)];
        
    
        // Sort the array in descending order
     const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);
    
        // Take the sum of the first three elements

        const maxSum = sortedNumbers.slice(0, 3).reduce((acc, curr) => acc + curr, 0);

        return maxSum;
    
    }
     Outs