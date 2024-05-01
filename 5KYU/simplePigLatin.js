function pigIt(str){
    //Code here
    return str.split(' ').map( ele =>  !(/[^\w\s]/.test(ele)) ? ele.slice(1)+ele[0]+'ay' : ele).join(' ')
  }