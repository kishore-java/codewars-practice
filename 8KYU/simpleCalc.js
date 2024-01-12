function calculator(num1,num2,sign){
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
     return 'unknown value';
   }
 
   switch (sign) {
     case '+':
       return num1 + num2;
     case '-':
       return num1 - num2;
     case '*':
       return num1 * num2;
     case '/':
       return  num1 / num2;
     default:
       return 'unknown value';
   }
 }