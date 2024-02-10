function calculate(str) {
    //your code here...
    let num = eval(str.replaceAll('plus', '+').replaceAll('minus' , '-'))
    return num.toString();
    }