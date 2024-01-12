function sumDigPow(a, b) {
    // Your code here
    let arr = [];
    for(let i=a; i<=b ; i++){
      let c = String(i).split('').reduce((a,c,i) =>{
        return Number(c) ** (i+1) + a
      },0)
        if(c === i) arr.push(i)
    }
    return arr;
  }
  sumDigPow(1, 10)