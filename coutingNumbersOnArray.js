function arrayOfRandomOfZeroToTen(number){
    
  let arrayRandom = [];
  for(let i = 0; i < number; i++){
      arrayRandom.push(Math.random() * 11)
  }

  return arrayRandom
}

function countEightToTenOfArray(array){

  let arrayEightToTen = [];

  array.forEach(function(el){
      if(el > 7){
          arrayEightToTen.push(el);
      }
  });

  return `There was being generated ${arrayEightToTen.length} numbers between 8 and 10 on this array, the array generated was: ${array}`
}

console.log(countEightToTenOfArray(arrayOfRandomOfZeroToTen(20)))