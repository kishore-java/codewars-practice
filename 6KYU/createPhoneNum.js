function createPhoneNumber(numbers){
    let areaCode = numbers.slice(0, 3).join('');
      let firstPart = numbers.slice(3, 6).join('');
      let secondPart = numbers.slice(6).join('');
      
      // Format the phone number
      return `(${areaCode}) ${firstPart}-${secondPart}`;
  }