// cw Count characters in your string 6kyu

function count (string) {  
  let objFinal = {}
  string.split('').forEach(key => {
    if(Object.keys(objFinal).includes(key)){
        objFinal[key] += 1
    } else {
        objFinal[key] = 1
    }
  });
   return objFinal;
}