// Check the exam 7kyu

function checkExam(array1, array2) {
  let grade = 0
  array2.forEach((e,i) => {
    if(e === array1[i]){
      grade += 4
    } else if ( e === ''){
      grade += 0
    } else {
      grade -= 1
    }
  } )
  if(grade < 0){
    return 0
  } else { return grade}
}