//longest 7kyu

function longest(s1, s2) {
  let arr1 = [];
  s1.split('').forEach((curr)=>{
   if(arr1.includes(curr)===false){
     arr1.push(curr)
   } 
  });
  s2.split('').forEach((curr)=>{
   if(arr1.includes(curr)===false){
     arr1.push(curr)
   } 
  });
  return arr1.sort().join('');
}