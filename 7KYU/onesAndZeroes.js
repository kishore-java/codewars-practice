const binaryArrayToNumber = arr => {
    // your code
    return arr.reverse().map((e,i) => Math.pow(2,i)*Number(e)).reduce((ac,cu)=> ac+cu)
  };