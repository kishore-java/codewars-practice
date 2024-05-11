function repeats(arr){
    //..
      let obj = { };
      
      arr.forEach( num => {
        
        if(obj[num]){
          obj[num]++;
        }else {
          obj[num] = 1;
        }
        
      })
      
      let sum = 0;
      
      for(let key in obj){
        if(obj[key] === 1){
          sum+= parseInt(key)
        }
      }
       return sum; 
      
      
      
    };