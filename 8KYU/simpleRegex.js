function validateCode (code) {
    //your code here
      const regex = /^[1-3]/;
      return regex.test(code.toString());
    }