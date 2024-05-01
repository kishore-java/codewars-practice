function spacey(array) {
    return array.map((ele,i) => array.slice(0,i+1).join(''))
  }