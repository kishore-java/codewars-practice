function count(string) {
    // TODO
    let obj={}
    string.split('').map(ele => {
      obj[ele]=(obj[ele]||0)+1
  //     return obj
    })
    return obj
  }