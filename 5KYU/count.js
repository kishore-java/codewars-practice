const sortByName = arr => {
    const words = {};
    arr.forEach(n => words[n] = num2word(n));
    return arr.sort((a, b) => words[a].localeCompare(words[b]));
  };
  
  function num2word(n){
    var a = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var b = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if (n >= 0 && n < 20) return a[n];
    if (n >= 20 && n < 100) return b[Math.floor(n / 10) - 2] + (n % 10 ? '-' + a[n % 10] : '');
    if (n >= 100 && n < 1000) return a[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + num2word(n % 100) : '');
    return num2word(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ' ' + num2word(n % 1000) : '');
  }