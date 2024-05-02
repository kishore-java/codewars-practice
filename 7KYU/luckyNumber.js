function isLucky(n) {
    //your code here
    let num = String(n).split('').reduce((ac,cu) => {
        return (+cu) + ac;
    },0)
    return num % 9 === 0;
  }