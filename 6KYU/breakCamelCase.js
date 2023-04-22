function solution(string) {
    return string.split('').map(ele => ele===ele.toUpperCase()?` ${ele}`:ele).join('')
 }