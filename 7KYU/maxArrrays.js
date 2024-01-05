function maxProduct(numbers, size){
    //your code here
    return numbers.sort((a,b) => b-a).slice(0,size).reduce((a,c) => c *a , 1)
  }