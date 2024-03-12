function spacify(str) {
    // return 
    return str.split('')
                .map((ele,i,a) => ele !== '' ? ele + ' ' : ele).join('').trim()
  }