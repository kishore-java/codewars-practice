function alternateCase(s) {
    return s.split('').map(ele => ele === ele.toLowerCase()?ele.toUpperCase():ele.toLowerCase()).join('');
  }