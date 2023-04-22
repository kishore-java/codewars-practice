function divCon(x){
    let z =  x.filter(ele => typeof ele === 'number').reduce((ac,cu)=> ac + cu,0)
    let y=  x.filter(ele => typeof ele === 'string').reduce((ac,cu)=> +cu + ac,0)
    return z-y
  }