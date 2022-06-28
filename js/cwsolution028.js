// cw 8kyu Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s){
  let arr1 = [];
  let arrV = 'aeiouAEIOU';
  s.split('').forEach(
    (curr) => {
      if(arrV.includes(curr)){
        arr1.push('!')
      } else { arr1.push(curr)}
    }
  )
  return arr1.join('')
}