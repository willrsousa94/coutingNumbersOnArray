function arrayOfRandomOfZeroToTen(number){
    
  let arrayRandom = [];
  for(let i = 0; i < number; i++){
      arrayRandom.push(Math.random() * 11)
  }

  return arrayRandom
}

function countMinToMaxOfArray(min, max, array){

  let arrayMinToMax = [];

  array.forEach(function(el){
      if(el >= min && el <= max){
          arrayMinToMax.push(el);
      }
  });

  return `There was being generated ${arrayMinToMax.length} numbers between ${min} and ${max} on this array, the array generated was: [${array}]`
}
console.log(countEightToTenOfArray(arrayOfRandomOfZeroToTen(20)))