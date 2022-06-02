//Form The Minimum

function minValue(values){
  let little = []
  values.sort((a,b)=>(a-b)).forEach((e) => {
    if(little.includes(e)){
    } else {
      little.push(e)
    }
  })
  return Number(little.join(''))
}