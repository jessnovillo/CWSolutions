// 5/11/22 You're a square!

var isSquare = function(n){
  if (n < 0){
    return false
  } else {
    return Number.isInteger(Math.sqrt(n))
  }
}