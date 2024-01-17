function twoHighest(arr) {
    if(!arr.length ) return []
    if(arr.length === 1) return arr
    arr = [...new Set(arr.sort((a,b) => a-b))]
    return [arr[arr.length - 1] , arr[arr.length - 2]];
  }