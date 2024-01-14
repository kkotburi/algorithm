const solution = (numbers) => {
  let sortedNumbers = numbers.sort((a, b) => b - a);
  let headNumbers = sortedNumbers[0] * sortedNumbers[1];
  let tailNumbers =
    sortedNumbers[sortedNumbers.length - 1] *
    sortedNumbers[sortedNumbers.length - 2];
  return headNumbers > tailNumbers ? headNumbers : tailNumbers;
};
