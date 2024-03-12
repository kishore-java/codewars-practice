function power(x,y){
    //SHOW ME WHAT YOU GOT!
    if(x === 0 && y === 0) return 1;
    let result = 1;
    for(let i =1 ; i<=y ; i++){
      result= result* x
    }
    return result;
  }