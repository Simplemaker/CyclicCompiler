

function LCM(array){
  var i=1;
  while(!isLCM(array, i)){
    ++i;
  }
  return i
}

function isLCM(array, number){
  for(var i=0; i<array.length; i++){
    if(number%array[i] != 0){
      return false
    }
  }
  return true
}