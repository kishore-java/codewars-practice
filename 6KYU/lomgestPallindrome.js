function longestPalindrome(s){
    function isPalindrome(substring) {
      return substring === substring.split('').reverse().join('');
    }
  
    let longestLength = 0;
  
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        const currentSubstring = s.slice(i, j);
        if (isPalindrome(currentSubstring) && currentSubstring.length > longestLength) {
          longestLength = currentSubstring.length;
        }
      }
    }
  
    return longestLength;
  }
  