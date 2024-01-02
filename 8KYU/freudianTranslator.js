function toFreud(string) {
    if (string === '') return '';
    let result = string.split(' ').map( ele => 'sex').join(' ')
  return result;
  }