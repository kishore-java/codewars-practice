function isLeapYear(year) {
    // TODO
     // Check if the year is divisible by 4
      if (year % 4 === 0) {
          // If divisible by 100 and not divisible by 400, it's not a leap year
          if (year % 100 === 0 && year % 400 !== 0) {
              return false;
          }
          // Otherwise, it's a leap year
          return true;
      } else {
          // If not divisible by 4, it's not a leap year
          return false;
      }
  }