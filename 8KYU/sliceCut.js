function cutIt(arr){
    //coding here...
   let cut = Math.min(...arr.map( ele => ele.length))
    return arr.map(ele => ele.slice(0,cut))
  }