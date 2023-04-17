

function sumOfMinimums(arr) {
    // your code here
   return arr.map(ele => Math.min(...ele)).reduce((ac,cu)=> ac+cu,0)
  }