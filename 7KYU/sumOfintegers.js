function sumOfIntegersInString(s){
    let z = s.split('').map(ele => !isNaN(ele) ? ele : '-')
    .join('')
    return z.split('-').filter(Number).map(ele => +ele).reduce((a,b) => a+b ,0)
    
     
    }