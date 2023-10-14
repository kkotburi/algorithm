const solution = (n, k) => {
  let answer = 0;
  let array = n
    .toString(k)
    .split("0")
    .filter((one) => one > 1);
  let isDecimal = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 2; j <= Math.sqrt(array[i]); j++) {
      if (Number.isInteger(array[i] / j)) {
        isDecimal = array[i] / j;
        break;
      }
    }
    if (!isDecimal) {
      answer++;
    }
  }
  return answer;
};