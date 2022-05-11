//5/10/22 -- Exes and Ohs 

function XO(str){
  let numX = str.toUpperCase().split('').filter(e => e ==='X').length
  let numO = str.toUpperCase().split('').filter(f => f ==='O').length
  if (numX === numO){
        return true
    } else { return false }
}