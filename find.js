function findMissingNumber(arr) {

  arr.sort((a, b) => a - b) //Сортируем массив от меньшнго к большему
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1  //Если разница данного числа и последующего числа больше одного, значит пропущенное число между ними
    }
  }
  
  return null // Если нет пропущенных чисел
}


module.exports = {
  findMissingNumber
}