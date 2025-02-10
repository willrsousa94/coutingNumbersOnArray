function arrayOfRandomOfZeroToTen(numberOfNumbersOnArray){

  let arrayRandom = [];
  for(let i = 0; i < numberOfNumbersOnArray; i++){
      arrayRandom.push(Math.floor(Math.random() * 11))
  }

  return arrayRandom;
}

function countMinToMaxOfArray(min, max, array){

  if(min > max){
      return `Cannot check the result, Min value ${min} is greater than Max value ${max}`
  } else {
      let arrayMinToMax = array.filter(newArray => newArray >= min && newArray <= max)

      if(min == max){
          return `There was being generated ${arrayMinToMax.length} equals to ${min} on this array, the array generated was: [${array}]`
      }else{
          return `here was being generated ${arrayMinToMax.length} numbers between ${min} and ${max} on this array, the array generated was: [${array}]`
      }
  }
}

console.log(countMinToMaxOfArray(8,8,arrayOfRandomOfZeroToTen(30)));