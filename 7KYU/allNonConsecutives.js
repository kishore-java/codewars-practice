function allNonConsecutive (arr) {
  
    let newArr=[]
   for(let i=0;i<arr.length; i++){
     
     if(arr[i]+1 !== arr[i+1] && typeof arr[i+1] === 'number' ){
       let obj={}
       obj["i"] =i+1;
       obj["n"]=arr[i+1]
       newArr.push(obj)
     }
   }
    return newArr
    
  }