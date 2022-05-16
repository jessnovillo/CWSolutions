function getSum( a,b )
{
   let small = Math.min(a,b)
   let large = Math.max(a,b)
   let arr1 = []
   for (let i = small; i <= large; i++){
    arr1.push(i)
    }
   return (arr1.reduce((acc,e) => acc += e ))
}