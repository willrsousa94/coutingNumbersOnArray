function arrayOfRandomOfZeroToTen(number){
    
  let arrayRandom = [];
  for(let i = 0; i < number; i++){
      arrayRandom.push(Math.random() * 11)
  }

  console.log(arrayRandom)
}