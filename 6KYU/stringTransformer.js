function stringTransformer(str) {
    // Your code here
    return str.split(' ')
        .map(ele => ele.split('').map(ele => ele === ele.toLowerCase()?ele.toUpperCase() : ele.toLowerCase()).join('')).reverse().join(' ')
  }