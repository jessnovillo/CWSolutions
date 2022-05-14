//Reverse Words 7kyu

function reverseWords(str) {
  let newS = str.split(' ').map(e => e.split('').reverse().join(''))
  console.log(newS)
  return newS.join(' ')
}

