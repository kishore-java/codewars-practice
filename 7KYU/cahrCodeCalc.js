function calc(x){
  
    let sum1 =  x.split('').map( ele => ele.charCodeAt(0)).join('')
    let sum2 = sum1.replaceAll('7' , '1').split('').reduce((a,b) => +a + +b,0)
    return sum1.split('').reduce((a,b) => +a + +b,0) - sum2;
  }