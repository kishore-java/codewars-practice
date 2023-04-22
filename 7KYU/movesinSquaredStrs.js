function vertMirror(strng) {
    // Your code
  strng=strng.split('\n').map(ele=>ele.split('').reverse().join('')).join('\n')
  return strng
}
function horMirror(strng) {
    // Your code
    strng=strng.split('\n').reverse().join('\n')
  return strng
}
function oper(fct, s) {
    // Your code
  return fct(s)
}