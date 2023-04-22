function solution(pairs){
    // TODO: complete
    let arr =Object.keys(pairs)
   return arr.map(ele => `${ele} = ${pairs[ele]}`).join(',')
  }