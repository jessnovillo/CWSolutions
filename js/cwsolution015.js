// Find Multiples of a Number

function findMultiples(integer, limit) {
  let arrNums = []
  for(let i = integer; i <= limit; i += integer){
    arrNums.push(i)
  }
  return arrNums
}
