// Find the capitals

var capitals = function (word) {
  let indexArray = []
	word.split('').forEach(
  (e,i) => {if(e === e.toUpperCase()){
    indexArray.push(i)
  }}
  )
  return indexArray
};