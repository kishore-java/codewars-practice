function sumMul(n,m){
    //your idea here
      if(n <=0 || m<=0 ) return 'INVALID';
      if(n>m) return n;
      let size;
            
      size = Math.trunc(m/n);
      if(m%n === 0) {
        size = size-1;
    }

      let arr=[];
      for(let i=1 ; i<=size ;i++){
        arr.push(n*i)
      }
       let sum = arr.reduce((a,b) => a+b)
      return sum
    }
    console.log(sumMul(17,1751));