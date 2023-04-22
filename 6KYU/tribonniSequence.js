function tribonacci(signature,n){
    //your code here
    if(n===0) return []
    let arr=signature
  //   signature.map(ele => )
    for (let i=0;i<n;i++){
      let sum=0
      sum=signature[i]+signature[i+1]+signature[i+2]
      signature.push(sum)
    }
    return arr.slice(0,n)
  }