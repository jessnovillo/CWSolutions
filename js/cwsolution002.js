
//Sum of a sequence  7kyu

const sequenceSum = (begin, end, step) => {
 if (begin >= end){
    return 0} else {
  let sumR = begin
  let nextN = begin
  while (nextN < end && nextN+step <= end ){
    nextN += step
    sumR += nextN
    }
  return sumR
 }
}