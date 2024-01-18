function disariumNumber(n){
    //your code here
    return n === n.toString().split('').reduce((ac,cu,i) => Math.pow(+cu, (i+1)) + ac,0) ? 'Disarium !!' : 'Not !!'; 
  }