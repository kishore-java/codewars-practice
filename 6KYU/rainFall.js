

function mean(town, strng) {
    // Your code
  const dataArr = strng.split('\n');
  for(let i=0 ; i<dataArr.length;i++){
    var record = dataArr[i].split(':')
    if(town === record[0]){
     var rainfallData = record[1].split(',').map(ele => Number(ele.split(' ')[1]));
      return rainfallData.reduce((a,b) => a+b ,0)/rainfallData.length;
                                                 }
  }
  return -1
  
}
function variance(town, strng) {
    // Your code
  const dataArr = strng.split('\n');
  for(let i=0 ; i<dataArr.length;i++){
    var record = dataArr[i].split(':')
    if(town === record[0]){
      var meant = mean(town , strng)
     var rainfallData = record[1].split(',').map(ele => Math.pow((Number(ele.split(' ')[1])-meant),2 ));
      return rainfallData.reduce((a,b) => a+b ,0)/rainfallData.length;
      
                                                 }
  }
  return -1
}