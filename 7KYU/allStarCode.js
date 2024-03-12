function toTime(seconds) {
    let hr = Math.floor(seconds / (60 * 60));
    let min = Math.floor((seconds % 3600) / 60)
  //code here
  return `${hr} hour(s) and ${min} minute(s)`
  }