function swap (string) {
    return string.split('').map(ele => 'AEIOUaeiou'.includes(ele) ? ele.toUpperCase() : ele).join('')
  //   return '';
  }