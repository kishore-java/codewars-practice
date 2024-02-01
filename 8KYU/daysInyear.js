function yearDays(year)
{
  let n=0;
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) n=1;
  //your code here
  return `${year} has ${365+n} days`
}