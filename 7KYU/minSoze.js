function minSum(arr) {
    arr.sort((a, b) => a - b);
    let result = 0;
    
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
      result += arr[i] * arr[j];
    }
    
    return result;
  }
  minSum([2,3,4,5])