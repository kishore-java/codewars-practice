function seven(m) {
    let steps = 0;
  
    while (m > 99) {
      let lastDigit = m % 10;
      m = Math.floor(m / 10) - (2 * lastDigit);
      steps++;
    }
  
    return [m, steps];
}  