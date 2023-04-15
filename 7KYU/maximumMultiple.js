function maxMultiple(divisor, bound){
    //your code here
    let arr=[]
    for(let i=1;i<=bound;i++){
  
      if(i%divisor===0){
        arr.push(i)
      }
      
    }  
    return arr.pop()
  
  }