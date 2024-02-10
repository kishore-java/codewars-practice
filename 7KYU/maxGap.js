function maxGap (numbers){
    //your code here
    let rar = []
    
   let sort =  numbers.sort((a,b) => a-b)
   for(let i=0 ; i<sort.length-1 ; i++){
     let diff = sort[i+1] - sort[i];
     rar.push(diff)
     
   }
    return Math.max(...rar)
  }