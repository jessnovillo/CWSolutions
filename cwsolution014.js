//Isograms

function isIsogram(str){
  if(str.length === 0){
    return true
  } else {
    let newArr = str.toLowerCase().split('').map((e,i) =>{
      let newStr = str.toLowerCase().substring(0,i)+str.substring(i+1)
      if(newStr.includes(e)){
        return true
      } else {return false}
    })
    if(newArr.includes(true)){
      return false
    } else {return true}
  }
}