function correctPolishLetters (string) {
    // your code
    const obj ={
      ą : 'a',
  ć :'c',
  ę : 'e',
  ł : 'l',
  ń :'n',
  ó : 'o',
  ś : 's',
  ź : 'z',
  ż : 'z'
    }
    return string.split('').map(ele => obj[ele]? obj[ele] : ele).join('')
  }