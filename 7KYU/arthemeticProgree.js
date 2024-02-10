function arithmeticSequenceElements(a, d, n) {
    let str=[a];
    let num =a
  for(let i=1 ; i<n; i++){
     num  = num +d;
    str.push(num)
  }
    return str.join(', ')
  }