function spinWords(string){
    //TODO Have fun :)
    return string.split(' ').map( ele => ele.length >= 5 ? ele.split('').reverse().join('') : ele).join(' ');
  }