// Reverse letter 7kyu

function reverseLetter(str) {
  let arrStr=[]
    str.toLowerCase().split('').forEach(
    e => {
      if(('abcdefghijklmnopqrstuvwxyz').includes(e)){
        arrStr.unshift(e)
      }
    })
  return arrStr.join('')
}