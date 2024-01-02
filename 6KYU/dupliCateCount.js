function duplicateCount(text){
    //...
    let obj = {};
    text.toLowerCase().split('').forEach((ele) => {
      obj[ele] = (obj[ele] === ele || obj[ele] === 'count') ? 'count' : ele;
    })
    let count =0;
    Object.keys(obj).forEach((ele) =>{
                if(obj[ele] === 'count') count++
                           } )
    return count;
  }

  duplicateCount('Indivisibilities')