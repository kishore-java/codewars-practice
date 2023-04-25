function evenNumbers(array, number) {
    // good luck
    let sortArr=array.reverse();
    return sortArr.filter(ele => ele%2===0).slice(0,number).reverse()
  }