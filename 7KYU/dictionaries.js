function createDict(keys, values){
    // ...
    let obj ={}
    if(keys.length <= values.length){
      
      for(let i = 0 ; i < keys.length ; i++ ){
        obj[keys[i]] = values [i]
      }
      
    }else{
       for(let i = 0 ; i < keys.length ; i++ ){
        obj[keys[i]] = values [i] ? values[i] : null
      }
    }  
    
    return obj
  }