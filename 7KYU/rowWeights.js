function rowWeights(array){
    //your code here
    let arr=[];
   arr[0]= array.map((ele,i) => i%2===0 && ele).reduce((ac,cu)=> cu +ac,0)
    arr[1]=array.map((ele,i) => i%2!==0 && ele).reduce((ac,cu)=> cu +ac,0)
    return arr
    
  }