function removeDuplicateWords (s) {
    // your perfect code...
    let arr= new Set(s.split(' '))
    console.log(arr)
    return Array.from(arr).join(' ')
  }