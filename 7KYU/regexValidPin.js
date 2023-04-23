function validatePIN (pin) {
    //return true or false
    let str='0123456789'
      let pinArray = pin.split('')
    if(pin.length===4){
       
     return pinArray.filter(ele => str.includes(ele)).length===4
    }else if(pin.length===6){
      return pinArray.filter(ele => str.includes(ele)).length===6
    }else {
      return false
    }
  }