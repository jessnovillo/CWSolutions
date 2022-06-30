// terminal game combat function 8kyu

function combat(health, damage) {
  let nHealth = health - damage; 
  if(nHealth < 0){
    return 0
  } else { return nHealth}
}