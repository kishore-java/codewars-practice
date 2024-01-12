function incrementer(nums) { 
    // code goes here
    return nums.map((ele,i) => (ele+(i+1)) % 10 )
  }