function bouncingBall(h,  bounce,  window) {
    // your code here
      if (h > 0 && 0 < bounce && bounce < 1 && window < h) {
          let count = 1; // The initial drop
          let reboundHeight = h * bounce;
  
          while (reboundHeight > window) {
              count += 2; // Counting both the upward and downward passes
              reboundHeight *= bounce;
          }
  
          return count;
      } else {
          return -1;
      }
  }