// the highest profit wins
function minMax(arr){
  arr.sort((a,b) => a - b);
  return Array.of(arr[0], arr[arr.length-1])
}