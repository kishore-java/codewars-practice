function slope(points)

{
  if((points[2] - points[0]) ===0)  return`undefined`;
  
 return `${(points[3] - points[1])/(points[2] - points[0])}`
}