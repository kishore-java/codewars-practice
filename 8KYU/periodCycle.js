function periodIsLate(last, today, cycleLength) {
    const daysPassed = Math.floor((today - last)/(1000*60*60*24));
  
    // Check if the number of days passed is greater than cycleLength
    return daysPassed > cycleLength;
  }

  periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)