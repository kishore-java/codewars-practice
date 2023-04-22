function switcheroo(x){
    let obj={
      a:'b',
      b:'a'
    }
    
    return x.split('').map(ele => ele==='a'?obj.a:ele==='b'?obj.b:ele).join('')
  
  }