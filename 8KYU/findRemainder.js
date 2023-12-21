function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    let max = Math.max(n,m)
    let min = Math.min(n,m)
    if(min == 0) return NaN;
    return max%min;
  }