function parseF(input) {
    if (typeof input === 'number') {
     return parseFloat(input);
   } else if (typeof input === 'string') {
     const parsedValue = parseFloat(input);
     return isNaN(parsedValue) ? null : parsedValue;
   } else {
     return null;
   }
 }