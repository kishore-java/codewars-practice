
function min(arr, toReturn) {
    // TODO
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
  }