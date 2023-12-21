function digPow(n, p){
    // ...
    let powerSumArr = [];
  // 1.divide the number into digits
    let strNum = String(n).split('').map(ele => +ele)
    //loop the elements and sum of digits raised to powers
    for(let i=0; i<strNum.length; i++){
      let digit = Math.pow(strNum[i],p);
      p++;
  
      powerSumArr.push(digit)
      
    }
    let sum = powerSumArr.reduce((a,b) => a+b,0);
    return Number.isInteger(sum / n) ? sum/n : -1;
  
    
  }