function checkThreeAndTwo(array) {
    //your code here
    let obj = {};
    for(let i=0 ;i< array.length ; i++){
      if(obj.hasOwnProperty(array[i])) obj[array[i]]++;
      else obj[array[i]] = 1
        
    }
    
    return Object.keys(obj).length > 2 ? false: (Object.values(obj)[0] === 2 || Object.values(obj)[0] === 3) ? true : false
  }