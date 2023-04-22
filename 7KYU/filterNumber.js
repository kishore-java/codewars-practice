var filterString = function(value) {
    //Complete this function :
    let str='1234567890'
    value= value.split('').filter(el => str.includes(el)).join('')
    return Number(value)
  }