
function inArray(array1,array2){
    //...
    //1. iterate through the array 1
    let arr = [];
    array1.forEach( ele =>{
      
      array2.forEach( elem => {
        if(elem.includes(ele)){
          arr.push(ele);
        }
      })
    }
      )
    return [...new Set(arr)].sort();
  }