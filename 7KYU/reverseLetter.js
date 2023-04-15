function reverseLetter(str) {
    //coding and coding..
    
    let alpha ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.split('').filter( ele => alpha.includes(ele)).reverse().join('')
    
  }