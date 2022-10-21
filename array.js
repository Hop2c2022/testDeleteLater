function sortArrayByParity() {
  const numbers = [3, 1, 2, 4];
  let lastEven = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      const temp = numbers[lastEven];
      numbers[lastEven] = numbers[i];
      numbers[i] = temp;
      lastEven++;
    }
  }
  return numbers;
}
sortArrayByParity();
