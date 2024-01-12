function stat(strg) {
    // your code
  if(strg.length === 0) return '';
  let arr = strg.split(',').map(sec =>{
    let [hours,mins,secs] = sec.split('|');
    return (+hours)*60*60 +(+mins * 60)+(+secs)
    
  }).sort((a,b) => a-b)
  let range = secondsToHMS(arr[arr.length - 1] - arr[0]);
  let average = secondsToHMS(arr.reduce((a,b) => a+b,0)/arr.length).split('.')[0]
  let median = arr.length % 2 ? secondsToHMS(arr[Math.floor(arr.length/2)]) : secondsToHMS((arr[arr.length/2] + arr[arr.length/2 - 1])/2).split('.')[0];
  return `Range: ${range} Average: ${average} Median: ${median}`
}

function secondsToHMS(seconds) {
    // Calculate hours, minutes, and remaining seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // Format the result as "hh:mm:ss"
    const formattedTime = `${padZero(hours)}|${padZero(minutes)}|${padZero(remainingSeconds)}`;

    return formattedTime;
}

function padZero(number) {
    return number < 10 ? "0" + number : number;
}