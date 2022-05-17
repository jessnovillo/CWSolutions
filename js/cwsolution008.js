//Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  if(current === 'red'){
    return 'green'
  } else if( current === 'green'){
    return 'yellow'
  } else {return 'red'}

}